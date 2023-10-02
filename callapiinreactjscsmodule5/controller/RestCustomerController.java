package com.example.callapiinreactjscsmodule5.controller;

import com.example.callapiinreactjscsmodule5.model.Customer;
import com.example.callapiinreactjscsmodule5.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customer")
public class RestCustomerController {
    @Autowired
    private ICustomerService customerService;
    @GetMapping("")
    public ResponseEntity<List<Customer>> showCustomerList(){
        List<Customer> customerList = customerService.findAll();
        if (customerList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerList, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> showCustomerList(@PathVariable int id){
        customerService.deleteCustomer(id);
        return ResponseEntity.ok("Delete Success");
    }
}
