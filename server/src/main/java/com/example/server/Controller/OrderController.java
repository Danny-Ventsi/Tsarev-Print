package com.example.server.Controller;

import com.example.server.Entity.Order;
import com.example.server.Entity.Product;
import com.example.server.Entity.ProductOrder;
import com.example.server.Model.OrderModel;
import com.example.server.Model.OrderProductModel;
import com.example.server.Service.OrderService;
import com.example.server.Service.ProductOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class OrderController {
    private final OrderService orderService;
    private final ProductOrderService productOrderService;

    @Autowired
    public OrderController(OrderService orderService, ProductOrderService productOrderService) {
        this.orderService = orderService;
        this.productOrderService = productOrderService;
    }

    @GetMapping("/orders")
    public List<Order> getAllOrders()
    {
        return orderService.getAllOrders();
    }

    //Get order by id
    @GetMapping("/orders/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Long id)
    {
        Order order = orderService.getOrderById(id);
        if(order != null)
        {
            return new ResponseEntity<>(order, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    //Create an order
    @PostMapping("/orders")
    public ResponseEntity<Order> createOrder(@RequestBody OrderModel orderModel)
    {
        Order order = new Order();
        order.setDescription(orderModel.getDescription());
        order.setStatus("Open");
        order.setUserInfo(orderModel.getUserInfo());
        List<Integer> quantity = new ArrayList<>();
        List<Product> products = new ArrayList<>();
        orderService.createOrder(order);
        for (OrderProductModel p: orderModel.getProductModel())
        {
            ProductOrder productOrder = new ProductOrder(order, p.getProduct(), p.getQuantity());
            productOrderService.createProductOrder(productOrder);
        }
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    //Update an order
    @PutMapping("/orders/{id}")
    public ResponseEntity<Order> updateOrder(@RequestBody Order newOrder, @PathVariable("id") Long id)
    {
        return new ResponseEntity<>(orderService.updateOrder(newOrder, id), HttpStatus.OK);
    }
}
