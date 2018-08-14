<template>
  	<div id="app">
		<router-view/>
		<notifications group="builder" />
	</div>
</template>

<script>
export default {
	name: 'app',
}
</script>

<style>
body {
	background-color: #f2f4f7;
	/* background-color: #fff; */
	font-family: 'Roboto', sans-serif;
	color: #333;
	font-size: 1.3rem;
	letter-spacing: 0.25px;
}

.input.is-danger,
.textarea.is-danger {
	border-color: #ff3860;
}

.is-danger {
	border-color: #ff3860;
}

.help.is-danger {
	color: #ff3860;
}

.help {
	display: block;
	font-size: 11px;
	margin-top: 5px;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.btn-blue {
	padding: 0.5rem 2rem 0.5rem 2rem;
	letter-spacing: 0.1px;
	font-weight: 600;
	color: #ffffff;
	background-color: #0069ff;
}

.btn-blue:focus,
.btn-blue:hover {
	color: #ffffff;
	background-color: #205081;
}

.btn-primary {
	background-color: #4259b6;
}

.btn-primary:focus,
.btn-primary:hover {
	background-color: #5c6ac0;
}

.primary-color {
	background: #4259b6 !important;
}

.number {
	cursor: pointer;
}

.default-workspace {
	padding-left: 30rem !important;
	width: 100%;
}

.large-workspace {
	padding-left: 45rem !important;
	width: 100%;
}

.default-panel {
	width: 30rem;
}

.large-panel {
	width: 220px;
}

.main-card {
	margin-top: 1rem;
	padding: 1rem 1rem 1.5rem 1rem;
	width: 100%;
	display: block;
	background-color: #fff;
	border-radius: 0.3rem;
	margin-right: 1rem;
}

.main-card__title {
	padding-top: 0.5rem;
	width: 100%;
	float: left;
	text-align: left;
	/* color: #fff; */
	font-weight: bold;
}
.main-card__content {
	display: block;
	float: left;
	width: 100%;
	padding-left: 3rem;
	padding-right: 3rem;
}

.main-card__content .item {
	margin-top: 1rem;
	padding: 0.5rem 0;
	width: 100%;
	float: left;
}

.main-card__content .item .main-label {
	width: 29%;
	float: left;
	margin-top: 0.5rem;
	text-align: left;
}

.main-card__content .item .main-control {
	margin-left: 0.3rem;
	width: 69%;
	float: left;
	text-align: left;
}

.form-group {
	margin-bottom: 1px !important;
}

.btn-fullwitdh {
	width: 100%;
}

#imageModal,
#templateModal,
#publishModal {
	z-index: 999999999 !important;
}

#formTemplateModal {
	z-index: 999999999 !important;
}

#editing-overlay {
	height: 100%;
	width: 100%;
	/* background: rgba(0, 0, 0, 0.5); */
	background: rgba(177, 185, 205, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 998;
	overflow: hidden;
}

.mg10 {
	margin-top: 10px;
}

.pd-left-30 {
	padding-left: 30px;
}

.pd-right-30 {
	padding-right: 30px;
}

.layout-row-action {
	padding: 0.5rem 0 0.5rem 0.5rem;
	width: 100%;
	float: left;
	background: #5c6ac0;
	text-align: left;
	margin-top: -2px;
}

.btn-add {
	background: none;
	color: #b1bacc;
	text-transform: capitalize;
	font-size: 14px;
}

.btn-add i {
	font-size: 17px;
	padding-left: 0.2rem;
	padding-right: 0.2rem;
}

.btn-add:focus,
.btn-add:hover {
	color: #fff;
}

.btn-add-item {
	cursor: pointer;
}

.btn-add-row {
	text-align: left !important;
	background: transparent !important;
	background-color: transparent !important;
	display: block;
	width: 100%;
	border: 0px solid;
	color: #fff !important;
}

#addNewModal {
	z-index: 100001 !important;
}

.sub-navbar {
	/* padding: 2rem 10rem 2rem 10rem;
	min-height: 7.5rem;
	border-bottom: 1px solid #ddd;
	background-color: #fff; */
	padding: 1rem 10rem 1rem 10rem;
	min-height: 6rem;
	border-bottom: 1px solid #ddd;
	background-color: #fff;
}

.subheader-title {
	padding-top: 1rem;
	font-weight: 600;
	text-align: left;
	font-size: 1.8rem;
}

.subheader-actionbar {
	text-align: right;
}

.simplert {
	z-index: 10000001 !important;
}

.preview-wrapper {
	padding-top: 0 !important;
	margin-top: -120px !important;
	/* background: #fff; */
}

.modal-title {
	color: #fff !important;
}

.tooltip {
	display: block !important;
	z-index: 10000;
}

.tooltip .tooltip-inner {
	background: black;
	color: white;
	border-radius: 16px;
	padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
	width: 0;
	height: 0;
	border-style: solid;
	position: absolute;
	margin: 5px;
	border-color: black;
	z-index: 1;
}

.tooltip[x-placement^='top'] {
	margin-bottom: 5px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
	border-width: 5px 5px 0 5px;
	border-left-color: transparent !important;
	border-right-color: transparent !important;
	border-bottom-color: transparent !important;
	bottom: -5px;
	left: calc(50% - 5px);
	margin-top: 0;
	margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
	margin-top: 5px;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
	border-width: 0 5px 5px 5px;
	border-left-color: transparent !important;
	border-right-color: transparent !important;
	border-top-color: transparent !important;
	top: -5px;
	left: calc(50% - 5px);
	margin-top: 0;
	margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
	margin-left: 5px;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
	border-width: 5px 5px 5px 0;
	border-left-color: transparent !important;
	border-top-color: transparent !important;
	border-bottom-color: transparent !important;
	left: -5px;
	top: calc(50% - 5px);
	margin-left: 0;
	margin-right: 0;
}

.tooltip[x-placement^='left'] {
	margin-right: 5px;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
	border-width: 5px 0 5px 5px;
	border-top-color: transparent !important;
	border-right-color: transparent !important;
	border-bottom-color: transparent !important;
	right: -5px;
	top: calc(50% - 5px);
	margin-left: 0;
	margin-right: 0;
}

.tooltip.popover .popover-inner {
	background: #f9f9f9;
	color: black;
	padding: 24px;
	border-radius: 5px;
	box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
	border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden='false'] {
	visibility: visible;
	opacity: 1;
	transition: opacity 0.15s;
}

.highlight-warning {
	background: #fcf1cd;
	color: #ed6347;
}

.img-logo {
	max-width: 100%;
	height: auto;
}
</style>
