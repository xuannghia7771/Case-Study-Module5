package com.example.callapiinreactjscsmodule5.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_id")
    private int typeId;
    private String typeName;
    @JsonBackReference
    @OneToMany(mappedBy = "customerType")
    private Set<Customer> customerSet;

    public CustomerType() {

    }

    public CustomerType(int typeId, String typeName, Set<Customer> customerSet) {
        this.typeId = typeId;
        this.typeName = typeName;
        this.customerSet = customerSet;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public Set<Customer> getCustomerSet() {
        return customerSet;
    }

    public void setCustomerSet(Set<Customer> customerSet) {
        this.customerSet = customerSet;
    }
}
