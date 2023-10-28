package com.example.server.Service;

import com.example.server.Entity.Product;
import com.example.server.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService
{
    //Dependency
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository)
    {
        this.productRepository = productRepository;
    }

    //Get all products
    public List<Product> getAllProducts()
    {
        return productRepository.findAll();
    }

    //Create product
    public Product createProduct(Product product)
    {
        return productRepository.save(product);
    }

    //Update product
    public Product updateProduct(Product product, Long id)
    {
        if (productRepository.findById(id).isEmpty())
        {
            return null;
        }
        product.setId(id);
        return productRepository.save(product);
    }
    public void deleteProduct(Long id)
    {
        productRepository.deleteById(id);
    }
}
