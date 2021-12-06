import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { setbmi } from '../../redux/actions/action';
import { useSelector, useDispatch } from 'react-redux';


const BmiForm = ({ change }) => {
	const bmi = useSelector((state) => state.bmireducer.bmistate);;
	const dispatch = useDispatch();
	const { weight, height, date, username } = bmi;
	const handleChange = (e) => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		dispatch(setbmi({ ...bmi, [name]: value, date }));
	};

	const handleSubmit = () => {
		change(bmi);
		dispatch(setbmi(bmi));
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">username</label>
					<input
						name="username"
						type="text"
						placeholder="50"
						value={username}
						onChange={handleChange}
					/>
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={weight === '' || height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired,
};

export default BmiForm;
