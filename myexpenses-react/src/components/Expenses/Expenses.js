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
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import CircularProgress from 'material-ui/CircularProgress';

class Expenses extends Component {
    constructor(props) {
        super(props);

        this.handleExpandMoreClick = this.handleExpandMoreClick.bind(this);
    }

    componentDidMount() {
        if(this.props.expenses.length === 0) {
            this.props.fetchExpenses();
        }
    }

    handleExpandMoreClick() {
        this.props.fetchExpenses();
    }

    renderTableRows() {
        return this.props.expenses.map((expense, index) => {
            const { id, amount, description, expense_category, currency } = expense;

            return (
                <TableRow key={id}>
                    <TableRowColumn>{++index}</TableRowColumn>
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
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Amount</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody showRowHover={true} displayRowCheckbox={false}>
                    {this.renderTableRows()}
                </TableBody>
            </Table>
        );
    }

    render() {
        return (
            <div className="main-window__expenses">
                <div className="expenses__header">
                    <h2>Expenses</h2>
                    { this.props.expenses.length === 0 ? <CircularProgress size={20} thickness={3} /> : null }
                </div>
                <div className="expenses__content">
                    <div className="expenses__table">
                        {this.renderExpensesTable()}
                    </div>
                    <div className="expenses__expand-more">
                        { this.props.expenses.length && this.props.nextPage <= this.props.pagesTotal  ?
                            <ExpandMoreIcon
                                style={{ width: '35px', height: '35px', color: 'rgba(0, 0, 0, 0.55)', cursor: 'pointer'}}
                                onClick={this.handleExpandMoreClick}
                            />
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ expenses }) {
    return {
        expenses: expenses.expensesList,
        nextPage: expenses.nextPage,
        pagesTotal: expenses.pagesTotal
    };
}

export default connect(mapStateToProps, { fetchExpenses })(Expenses);