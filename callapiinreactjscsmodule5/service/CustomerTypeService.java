package com.example.callapiinreactjscsmodule5.service;

import com.example.callapiinreactjscsmodule5.model.CustomerType;
import com.example.callapiinreactjscsmodule5.repository.ICustomerTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerTypeService{
    @Autowired
    private ICustomerTypeRepository customerTypeRepository;

    @Override
    public List<CustomerType> findAll() {
        return customerTypeRepository.findAll();
    }
}
