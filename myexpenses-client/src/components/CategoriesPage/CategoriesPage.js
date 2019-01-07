import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { createCategory, getCategories } from './CategoriesPage.data';
import PlusIcon from '../Shared/Icons/PlusIcon';
import MeModal from '../Shared/MeModal';
import MeCard from '../Shared/MeCard';
import { MODAL_NEW_CATEGORY } from '../../types/modal.types';
import LoadingSpinner from '../Shared/Icons/LoadingSpinner';
import styles from './CategoriesPage.styles';

class CategoriesPage extends Component {
  constructor(props) {
    super(props);

    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.onCategoryCreate = this.onCategoryCreate.bind(this);

    this.state = {
      loading: true,
      currentModal: null,
      categories: []
    };
  }

  componentDidMount() {
    getCategories().then(categories => {
      this.setState({ categories, loading: false });
    });
  }

  onCategoryCreate({ categoryName }) {
    const requestData = {
      name: categoryName
    };

    createCategory(requestData).then(res =>
      this.setState({ categories: [res, ...this.state.categories] })
    );
    this.handleHideModal();
  }

  handleHideModal() {
    this.setState({ currentModal: null });
  }

  handleShowModal(modal) {
    this.setState({ currentModal: modal });
  }

  sortCategories(categories) {
    return categories.sort((prev, next) => (prev.name > next.name ? 1 : -1));
  }

  renderNewCategoryModal() {
    return (
      <MeModal
        modalType={MODAL_NEW_CATEGORY}
        width="640px"
        hideModal={this.handleHideModal}
        createCategory={this.onCategoryCreate}
      />
    );
  }

  renderCategoriesList() {
    const { classes } = this.props;
    const { categories } = this.state;

    const sortedCategories = this.sortCategories(categories);

    return (
      <div className={classes.categoriesList}>
        {sortedCategories.map(category => (
          <div
            className={classes.categoryListItem}
            key={`category-${category.name}`}
          >
            <div className={classes.categoryName}>{category.name}</div>
            <div className={classes.categoryCreated}>
              Date added:&nbsp;
              {new Date(category.created_at).toLocaleString('us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  renderEmptyState() {
    const { classes } = this.props;

    return (
      <div className={classes.emptyWrapper}>
        <span>
          You haven't added any category. Click on the
          <span role="img" aria-label="plus icon">
            &nbsp;➕&nbsp;
          </span>
          button in the bottom right corner to add new category.
        </span>
      </div>
    );
  }

  renderCategories() {
    const { categories } = this.state;

    return categories && categories.length ? (
      <MeCard>{this.renderCategoriesList()}</MeCard>
    ) : (
      this.renderEmptyState()
    );
  }

  renderLoadingState() {
    const { classes } = this.props;

    return (
      <div className={classes.loadingWrapper}>
        <LoadingSpinner />
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { currentModal, loading } = this.state;

    return (
      <div className={classes.categoriesPage}>
        <h2 className={classes.categoriesPageTitle}>Categories</h2>
        {loading ? this.renderLoadingState() : this.renderCategories()}
        <div
          className={classes.addButton}
          onClick={() => this.handleShowModal(MODAL_NEW_CATEGORY)}
        >
          <PlusIcon />
        </div>
        {currentModal === MODAL_NEW_CATEGORY
          ? this.renderNewCategoryModal()
          : null}
      </div>
    );
  }
}

export default injectSheet(styles)(CategoriesPage);
