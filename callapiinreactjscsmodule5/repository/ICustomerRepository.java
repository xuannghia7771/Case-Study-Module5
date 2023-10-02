package com.example.callapiinreactjscsmodule5.repository;

import com.example.callapiinreactjscsmodule5.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

}
