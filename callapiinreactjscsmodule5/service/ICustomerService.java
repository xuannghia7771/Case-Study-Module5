package com.example.callapiinreactjscsmodule5.service;

import com.example.callapiinreactjscsmodule5.model.Customer;

import java.util.List;

public interface ICustomerService {
    List<Customer> findAll();

    void deleteCustomer(int id);
}
