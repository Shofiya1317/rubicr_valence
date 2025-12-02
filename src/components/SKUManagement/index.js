	import React from "react";
	import "./index.css";
	import searchIcon from "../../assets/search_icon.png";
	import Select from "react-select"
  import addIcon from "../../assets/add_icon.png";
	import fileUpload from "../../assets/file_upload.png";
import Table from "../Table/index.js";

		const columns = [
  { label: "SKU Name", accessor: "name" },
  { label: "Category", accessor: "category" },
  { label: "Price", accessor: "price" },
];

const data = [
  { name: "Sample SKU 1", category: "Cat A", price: "$120" },
  { name: "Sample SKU 2", category: "Cat B", price: "$160" },
];

	export default function SkuManagement() {

		return (
			<div className="sku-page-container p-3">

				{/* Heading Container */}
				<div className="d-flex flex-column sku-heading-container mb-3">
					<h2>SKU Management</h2>
					<p className="mt-1">Manage product SKUs and vendor assignments</p>
				</div>
			<div className="sku-top-row">

			{/* Filters on the LEFT */}
			<div className="sku-filter-container mt-3">
					<div className="filter-box">
		<label className="filter-label mb-1">Search SKU’s</label>

		<div className="search-box">
			<input
				type="text"
				className="sku-input"
				placeholder="Search by name or code"
			/>
			<img src={searchIcon} alt="search" className="search-icon" />
		</div>
	</div>

					<div className="filter-box">
			<p className="filter-label mb-1">Category</p>
			<Select
				classNamePrefix="sku-select"
				options={[
					{ value: "cat1", label: "Category 1" },
					{ value: "cat2", label: "Category 2" },
					{ value: "cat3", label: "Category 3" },
				]}
				placeholder="All Categories"
			/>
		</div>

					
					<div className="filter-box">
			<p className="filter-label mb-1">Status</p>
			<Select
				classNamePrefix="sku-select"
				options={[
					{ value: "cat1", label: "Category 1" },
					{ value: "cat2", label: "Category 2" },
					{ value: "cat3", label: "Category 3" },
				]}
				placeholder="All Status"
			/>
		</div>
		
					<div className="filter-box">
			<p className="filter-label mb-1">Vendor</p>
			<Select
				classNamePrefix="sku-select"
				options={[
					{ value: "cat1", label: "Category 1" },
					{ value: "cat2", label: "Category 2" },
					{ value: "cat3", label: "Category 3" },
				]}
				placeholder="All Vendors"
			/>
		</div>
			</div>

			{/* Buttons on the RIGHT */}
			<div className="sku-buttons-container">
				<button className="sku-btn create-btn">
					<img src={addIcon} alt="" className="btn-icon" />
					Create New SKU
				</button>

				<button className="sku-btn upload-btn">
					<img src={fileUpload} alt="" className="btn-icon" />
					Upload File
				</button>
			 </div>
		</div>

		<p className="results-text text-small mt-4">showing results</p>
		<div>
			<Table columns={columns} data={data} />;
		</div>
		</div>
		);
	}
