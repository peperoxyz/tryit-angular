import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { Product, products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  product: Product | undefined;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} has been added to the cart!`);
  }

  ngOnInit() {
    // Get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Find the product that correspond with the id provided in route.
    this.product = products.find((product) => product.id === productIdFromRoute);
  }
}
