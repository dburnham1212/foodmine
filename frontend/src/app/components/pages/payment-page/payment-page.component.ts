import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { TitleComponent } from "../../partials/title/title.component";
import { TextInputComponent } from "../../partials/text-input/text-input.component";
import { OrderItemsListComponent } from "../../partials/order-items-list/order-items-list.component";
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from '../../partials/map/map.component';
import { PaypalButtonComponent } from "../../partials/paypal-button/paypal-button.component";

@Component({
    selector: 'app-payment-page',
    standalone: true,
    templateUrl: './payment-page.component.html',
    styleUrl: './payment-page.component.css',
    imports: [
        TitleComponent,
        TextInputComponent,
        OrderItemsListComponent,
        ReactiveFormsModule,
        MapComponent,
        PaypalButtonComponent
    ]
})
export class PaymentPageComponent {
  order: Order = new Order();

  constructor(orderService: OrderService, router: Router) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) =>{
        this.order = order;
      },
      error: () => {
        router.navigateByUrl('/checkout')
      }
    })
  }
}
