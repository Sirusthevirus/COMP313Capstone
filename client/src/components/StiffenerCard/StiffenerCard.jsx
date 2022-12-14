import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import styles from "./StiffenerCard.module.css"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const StiffenerCard = ({ options, ids, setIds, numberOfUse, setNumberOfUse }) => {
    console.log(options)

    // States
    const [itemList, setItemList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    // Handlers
    const addItem = (item) => {
        setIds([...ids, item._id])
        setItemList([...itemList, item])
    }

    const deleteItem = (item) => {
        setIds(ids.filter(element => element !== item._id))

        setItemList(itemList.filter(element => element._id !== item._id))

        setNumberOfUse({ ...numberOfUse, [item._id]: 0 })
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const addDisable = (item) => {
        return ids.includes(item._id)
    }

    // CHANGE
    const handleSearchFilter = (item) => {
        return (item.supplier.toLowerCase().includes(searchTerm.toLowerCase()) || item.material.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    const handleChangeNumberOfUse = (event, row) => {
        setNumberOfUse({ ...numberOfUse, [row._id]: event.target.value })
    }

    return (
        <Paper sx={{ borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px", padding: "24px", marginTop: "24px" }}>
            {/* Title */}
            <Typography variant="h4">Stiffener</Typography>


            {/* Available options */}
            <Typography variant="h6">Available Options</Typography>

            {/* Search */}
            <TextField
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                fullWidth
                size="small"
            />

            {/* Available options table */}
            <TableContainer component={Box}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Supplier</TableCell>
                            <TableCell>Material</TableCell>
                            <TableCell>Thickness</TableCell>
                            <TableCell>Number of Use</TableCell>
                            <TableCell>Add</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {options.filter(handleSearchFilter).map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.supplier}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.material}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.thickness}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <TextField
                                        id="outlined-name"
                                        size="small"
                                        label="NumberOfUse"
                                        value={numberOfUse[row._id] ?? 0}
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        onChange={(event) => { handleChangeNumberOfUse(event, row) }}
                                    />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <IconButton onClick={() => { addItem(row) }} disabled={addDisable(row)}><AddIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Selected options */}
            <Typography variant="h6">Selected Options</Typography>

            {/* Selected options table */}
            {itemList.length > 0 && (<TableContainer component={Box}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Supplier</TableCell>
                            <TableCell>Material</TableCell>
                            <TableCell>Thickness</TableCell>
                            <TableCell>Number of Use</TableCell>
                            <TableCell>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {itemList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.supplier}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.material}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.thickness}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {numberOfUse[row._id] ?? 0}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <IconButton onClick={() => { deleteItem(row) }}><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)}

            {(itemList.length === 0) && <div className={styles.noItems}>No options selected</div>}

        </Paper>
    )
}

export default StiffenerCard 