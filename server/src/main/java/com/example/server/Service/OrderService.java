package com.example.server.Service;

import com.example.server.Entity.Order;
import com.example.server.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService
{

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository)
    {
        this.orderRepository = orderRepository;
    }

    //Create an order
    public Order createOrder(Order order)
    {
        return orderRepository.save(order);
    }

    //Get all orders
    public List<Order> getAllOrders()
    {
        return orderRepository.findAll();
    }

    //Get order by id
    public Order getOrderById(Long id)
    {
        return orderRepository.findById(id).orElse(null);
    }

    //Update an order
    public Order updateOrder(Order order, Long id)
    {
        if(orderRepository.findById(id).isEmpty())
        {
            return null;
        }
        return orderRepository.save(order);
    }


}
