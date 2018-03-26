import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../../actions/expenses';
import Chip from 'material-ui/Chip';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Expenses extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchExpenses();
    }

    renderTableRows() {
        return this.props.expenses.map(expense => {
            const { id, amount, description, expense_category, currency } = expense;

            return (
                <TableRow key={id}>
                    <TableRowColumn>{id}</TableRowColumn>
                    <TableRowColumn>{`${amount} ${currency.code}`}</TableRowColumn>
                    <TableRowColumn>{description}</TableRowColumn>
                    <TableRowColumn>
                        <Chip>{expense_category.name}</Chip>
                    </TableRowColumn>
                </TableRow>
            );
        });
    }

    renderExpensesTable() {
        return (
            <Table selectable={false}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Amount</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.renderTableRows()}
                </TableBody>
            </Table>
        );
    }

    render() {
        return (
            <div className="main-window__expenses">
                <h2 className="expenses__header">Expenses</h2>
                <div className="expenses__content">
                    <div className="expenses__table">
                        {this.renderExpensesTable()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ expenses }) {
    return { expenses };
}

export default connect(mapStateToProps, { fetchExpenses })(Expenses);