import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const onLogout = async (e) => {
		await dispatch(logout());
		history.push('/');
	};

	return (
		<button className='create-button' onClick={onLogout}>
			Log out
		</button>
	);
};

export default LogoutButton;
