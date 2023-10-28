package com.example.server.Controller;

import com.example.server.Entity.Product;
import com.example.server.Model.ProductModel;
import com.example.server.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController
{
    //Dependency
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService)
    {
        this.productService = productService;
    }

    //Return all products
    @GetMapping("/products")
    public List<Product> getAllProducts()
    {
        return productService.getAllProducts();
    }

    //Create product
    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@ModelAttribute ProductModel product) throws IOException
    {
        String name = product.getName();
        String description = product.getDescription();
        float price = product.getPrice();
        byte[] photo = product.getImage().getBytes();
        Product newProduct = new Product(name, description, price, photo);
        productService.createProduct(newProduct);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }

    //Update product
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@ModelAttribute ProductModel product, @PathVariable("id") Long id) throws IOException
    {
        String name = product.getName();
        String description = product.getDescription();
        float price = product.getPrice();
        byte[] photo = product.getImage().getBytes();
        Product newProduct = new Product(name, description, price, photo);
        productService.updateProduct(newProduct, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Delete product
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable("id") Long id)
    {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
