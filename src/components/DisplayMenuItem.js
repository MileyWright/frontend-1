import React from 'react';
import { connect } from 'react-redux';
import { deleteMenuItem, editMenuItem } from '../store/actions';
import { useHistory } from 'react-router-dom';

function DisplayMenuItem(props) {
  const {
    userType,
    menuItem,
    user,
    currentTruck,
    deleteMenuItem,
    editMenuItem,
  } = props;
  const { push } = useHistory();
  const {
    id,
    itemName,
    itemDescription,
    itemPrice,
    itemPhotos,
    customerRatings,
    customerRatingsAvg,
  } = menuItem;

  const truckOwner =
    userType === 'operator' && user.operatorId === currentTruck.operatorId
      ? true
      : false;

  const handleDelete = () => {
    deleteMenuItem(currentTruck.id, id);
    push(`/dashboard`);
  };

  const handleEdit = () => {
    editMenuItem(menuItem);
    push('/editmenuitem');
  };
  return (
    <>
      <h3>{itemName}</h3>
      <ul>
        <li>Price: ${itemPrice}</li>
        <li>Average Rating: {customerRatingsAvg}/5</li>
        <li>Number of Ratings: {customerRatings.length} </li>
        <li>Description: {itemDescription} </li>
      </ul>
      {itemPhotos.map(photo => (
        <p>
          <img src={photo} />
        </p>
      ))}
      {truckOwner ? (
        <div>
          <button onClick={handleEdit}>Edit Menu Item</button>
          <button onClick={handleDelete}>Delete Menu Item</button>
        </div>
      ) : null}
    </>
  );
}
const mapStateToProps = state => {
  return {
    userType: state.userType,
    user: state.user,
    currentTruck: state.currentTruck,
  };
};

export default connect(mapStateToProps, { deleteMenuItem, editMenuItem })(
  DisplayMenuItem
);
