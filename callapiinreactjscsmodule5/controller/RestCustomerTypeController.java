package com.example.callapiinreactjscsmodule5.controller;

import com.example.callapiinreactjscsmodule5.model.Customer;
import com.example.callapiinreactjscsmodule5.model.CustomerType;
import com.example.callapiinreactjscsmodule5.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customerType")
public class RestCustomerTypeController {
    @Autowired
    private ICustomerTypeService customerTypeService;

    @GetMapping("")
    public ResponseEntity<List<CustomerType>> showCustomerList() {
        List<CustomerType> customerTypeList = customerTypeService.findAll();
        if (customerTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerTypeList, HttpStatus.OK);
    }
}
