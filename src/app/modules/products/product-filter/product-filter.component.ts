import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/model/models';

interface PriceRange {
  min: number;
  max: number;
  label: string;
}
@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Output() filteredProducts = new EventEmitter<Product[]>();

  filterForm: FormGroup;
  brands: string[] = [];
  categories: string[] = [];
  brandCounts: { [key: string]: number } = {};
  categoryCounts: { [key: string]: number } = {};
  priceRangeCounts: { [key: string]: number } = {};

  priceRanges: PriceRange[] = [
    { min: 50, max: 75, label: '$50 to $75' },
    { min: 75, max: 100, label: '$75 to $100' },
    { min: 100, max: 200, label: '$100 to $200' },
    { min: 200, max: 300, label: '$200 to $300' },
    { min: 300, max: 400, label: '$300 to $400' },
    { min: 400, max: 500, label: '$400 to $500' },
    { min: 500, max: 750, label: '$500 to $750' },
    { min: 750, max: 1000, label: '$750 to $1000' },
    { min: 1000, max: 1250, label: '$1000 to $1250' },
    { min: 1500, max: 2000, label: '$1500 to $2000' },
  ];

  // UI State
  showAllBrands = false;
  showAllCategories = false;
  visiblePriceRanges = 5;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      brands: this.fb.group({}),
      categories: this.fb.group({}),
      prices: this.fb.group({}),
    });

    this.filterForm.valueChanges.subscribe(() => this.filterProducts());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'] && this.products) {
      this.initializeFilters();
      this.filterProducts();
    }
  }

  private initializeFilters(): void {
    this.extractBrandsAndCategories();
    this.buildFormControls();
    this.computeInitialCounts();
  }

  private extractBrandsAndCategories(): void {
    const brandsSet = new Set<string>();
    const categoriesSet = new Set<string>();

    this.products.forEach((product) => {
      brandsSet.add(product.brand);
      categoriesSet.add(product.category);
    });

    this.brands = Array.from(brandsSet).sort();
    this.categories = Array.from(categoriesSet).sort();
  }

  private buildFormControls(): void {
    const brandsGroup = this.fb.group({});
    this.brands.forEach((brand) =>
      brandsGroup.addControl(brand, this.fb.control(false))
    );
    this.filterForm.setControl('brands', brandsGroup);

    const categoriesGroup = this.fb.group({});
    this.categories.forEach((category) =>
      categoriesGroup.addControl(category, this.fb.control(false))
    );
    this.filterForm.setControl('categories', categoriesGroup);

    const pricesGroup = this.fb.group({});
    this.priceRanges.forEach((range) => {
      const key = `${range.min}-${range.max}`;
      pricesGroup.addControl(key, this.fb.control(false));
    });
    this.filterForm.setControl('prices', pricesGroup);
  }

  private computeInitialCounts(): void {
    this.brandCounts = this.products.reduce((acc, product) => {
      acc[product.brand] = (acc[product.brand] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    this.categoryCounts = this.products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    this.priceRangeCounts = {};
    this.priceRanges.forEach((range) => {
      const key = `${range.min}-${range.max}`;
      this.priceRangeCounts[key] = this.products.filter(
        (p) => p.price >= range.min && p.price <= range.max
      ).length;
    });
  }

  private filterProducts(): void {
    const selectedBrands = this.getSelectedValues('brands');
    const selectedCategories = this.getSelectedValues('categories');
    const selectedPrices = this.getSelectedValues('prices');

    const filtered = this.products.filter((product) => {
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.some((range) => {
          const [min, max] = range.split('-').map(Number);
          return product.price >= min && product.price <= max;
        });

      return brandMatch && categoryMatch && priceMatch;
    });

    this.filteredProducts.emit(filtered);
  }

  private getSelectedValues(controlName: string): string[] {
    const controlGroup = this.filterForm.get(controlName) as FormGroup;
    return Object.entries(controlGroup.controls)
      .filter(([_, control]) => control.value)
      .map(([key]) => key);
  }

  togglePriceRanges(): void {
    this.visiblePriceRanges =
      this.visiblePriceRanges === 5 ? this.priceRanges.length : 5;
  }
}
