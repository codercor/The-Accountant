import { Container, Grid, TextField, Button, Typography, Select, MenuItem, InputLabel } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../service/axios'
import { setNewProduct, clearNewProduct, createProduct, fetchProducts } from '../../../store/slices/productSlice'
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
export default function Product() {
    const product = useSelector(state => state.product.newProduct)
    useEffect(() => {
        console.log(product)
    }, []);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(setNewProduct({ ...product, [e.target.name]: e.target.value }))
    }
    const handleCreateProduct = (e) => {
        dispatch(createProduct(product))
        // dispatch(fetchProducts())
    }

    const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumberFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                isNumericString
                prefix="€ "
            />
        );
    });

    NumberFormatCustom.propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };


    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" rowSpacing={3} mt={1} >
                <Grid item md={12} xs={12}>
                    <Typography variant="h4" >Product</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={product.title} name="title" onChange={handleChange} fullWidth label="Title" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }} id="formatted-numberformat-input" value={product.price} name="price" onChange={handleChange} fullWidth label="Price" variant="outlined" />
                </Grid>

                <Grid item md={7} xs={12}>
                    <InputLabel id="unit-select">Unit</InputLabel>
                    <Select
                        fullWidth
                        labelId="unit-select"
                        id="unit-select"
                        label="Unit"
                        name="unit"
                        value="meter"
                        onChange={handleChange}
                    >
                        <MenuItem value="meter">Meter</MenuItem>
                        <MenuItem value="minute">Minute</MenuItem>
                        <MenuItem value="hour">Hour</MenuItem>
                        <MenuItem value="squaremeter">m²</MenuItem>
                        <MenuItem value="hour">Piece</MenuItem>

                    </Select>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Button variant="contained" color="success" fullWidth onClick={() => {
                        handleCreateProduct();
                    }}>Save</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
