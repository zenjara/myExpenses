import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { fetchExpenses, submitNewExpense } from '../../actions/expenses';
import Card, { CardActions, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import Chip from 'material-ui/Chip';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import { FormattedDate } from 'react-intl';

class Expenses extends Component {
    constructor(props) {
        super(props);

        this.handleExpandMoreClick = this.handleExpandMoreClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.expenses.length === 0) {
            this.props.fetchExpenses();
        }
    }

    handleExpandMoreClick() {
        this.props.fetchExpenses();
    }

    handleFormSubmit(values) {
        this.props.submitNewExpense(values);
    }

    renderAmountField(field) {
        const { touched, error } = field.meta;

        return (
            <TextField
                id="amount"
                type="number"
                hintText="Expense amount"
                style={{ width: 'auto' }}
                {...field.input}
                errorText={touched && error}
            />
        );
    }

    renderExpenseCategoryField(field) {
        const { categories } = field;
        const { touched, error } = field.meta;

        return (
            <SelectField
                id="expense_category"
                hintText="Expense category"
                {...field.input}
                errorText={touched && error}
                onChange={(event, index, value) => field.input.onChange(value)}
            >
                { Object.keys(categories).map(id => {
                    const category = categories[id];
                    return <MenuItem value={category.id} primaryText={category.name} key={category.id} />
                })}
            </SelectField>
        );
    }

    renderCurrencyField(field) {
        const { currencies } = field;
        const { touched, error } = field.meta;

        return (
            <SelectField
                id="currency"
                hintText="Expense currency"
                {...field.input}
                errorText={touched && error}
                onChange={(event, index, value) => field.input.onChange(value)}
            >
                { Object.keys(currencies).map(id => {
                    const currency = currencies[id];
                    return <MenuItem value={currency.id} label={currency.code} primaryText={`${currency.name}: ${currency.code}`} key={currency.id} />
                })}
            </SelectField>
        );
    }

    renderDescriptionField(field) {
        const { touched, error } = field.meta;

        return (
            <TextField
                id="description"
                type="text"
                hintText="Expense description"
                style={{ width: 'auto' }}
                fullWidth={true}
                {...field.input}
                errorText={touched && error}
            />
        );
    }


    renderTableRows() {
        return this.props.expenses.map((expense, index) => {
            const { id, amount, description, expense_category, currency, created_at } = expense;
            const itemDate = new Date(created_at);

            return (
                <TableRow key={id}>
                    <TableRowColumn>{++index}</TableRowColumn>
                    <TableRowColumn>{`${amount} ${currency.code}`}</TableRowColumn>
                    <TableRowColumn>{description}</TableRowColumn>
                    <TableRowColumn>
                        <FormattedDate
                            value={itemDate}
                            year='numeric'
                            month='long'
                            day='numeric'
                            weekday='short'
                        />
                    </TableRowColumn>
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
                        <TableHeaderColumn>No</TableHeaderColumn>
                        <TableHeaderColumn>Amount</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                        <TableHeaderColumn>Date & Time</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody showRowHover={true} displayRowCheckbox={false}>
                    {this.renderTableRows()}
                </TableBody>
            </Table>
        );
    }

    render() {
        const { handleSubmit, reset } = this.props;

        return (
            <div className="main-window__expenses">
                <div className="expenses__header">
                    <h2>Expenses</h2>
                    { this.props.expenses.length === 0 ? <CircularProgress size={20} thickness={3} /> : null }
                </div>
                <div className="expenses__content">
                    <Card className="new-expense-card">
                        <CardHeader
                            title="New Expense"
                            style={{
                                padding: '12px 14px'
                            }}
                            titleStyle={{
                                color: '#999',
                                fontSize: '18px'
                            }}
                        />
                        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                            <div className="card-form">
                                <Field
                                    name="amount"
                                    component={this.renderAmountField}
                                />
                                <Field
                                    name="category"
                                    component={this.renderExpenseCategoryField}
                                    categories={this.props.categories}
                                />
                                <Field
                                    name="currency"
                                    component={this.renderCurrencyField}
                                    currencies={this.props.currencies}
                                />
                                <Field
                                    name="description"
                                    component={this.renderDescriptionField}
                                />
                            </div>
                            <CardActions
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}
                            >
                                {   this.props.submittingExpense ?
                                    <CircularProgress /> :
                                    <FlatButton label="Submit" primary={true} type="submit" />
                                }
                            </CardActions>
                        </form>
                    </Card>
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

function validate(values) {
    const errors = {};

    if(!values.amount) {
        errors.amount = 'Please enter an amount';
    }

    if(!values.category) {
        errors.category = 'Please select a category';
    }

    if(!values.currency) {
        errors.currency = 'Please select a currency';
    }

    return errors;
}

function mapStateToProps({ expenses, categories, currencies }) {
    return {
        expenses: expenses.expensesList,
        nextPage: expenses.nextPage,
        pagesTotal: expenses.pagesTotal,
        submittingExpense: expenses.submittingExpense,
        categories,
        currencies
    };
}

export default reduxForm({
    validate,
    form: 'NewExpenseForm'
})(
    connect(mapStateToProps, { fetchExpenses, submitNewExpense })(Expenses)
);