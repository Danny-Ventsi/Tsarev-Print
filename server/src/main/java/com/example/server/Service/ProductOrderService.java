package com.example.server.Service;

import com.example.server.Entity.ProductOrder;
import com.example.server.Repository.ProductOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductOrderService
{
    private final ProductOrderRepository productOrderRepository;

    @Autowired
    public ProductOrderService(ProductOrderRepository productOrderRepository)
    {
        this.productOrderRepository = productOrderRepository;
    }
    public ProductOrder createProductOrder(ProductOrder product)
    {
        return productOrderRepository.save(product);
    }
}
