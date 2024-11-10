<div align="left" style="position: relative;">
<img src="https://img.icons8.com/?size=512&id=55494&format=png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>WILD-OASIS</h1>
<p align="left">
	<em><code>❯ REPLACE-ME</code></em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/TheXro/Wild-Oasis?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/TheXro/Wild-Oasis?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/TheXro/Wild-Oasis?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/TheXro/Wild-Oasis?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
- [🔰 Contributing](#-contributing)

---

## 📍 Overview

Wild Oasis is a web application for managing cabin bookings, providing features for checking availability, booking management, and user settings. The project leverages modern tools and a modular design for scalability.

## 👾 Features

- **User Authentication**: Secure login, signup, and password management with Supabase.
- **Booking Management**: View, create, and manage bookings with status updates.
- **Responsive Design**: Styled-components used for cross-device compatibility.
- **Context & Compound Components**: Used to manage shared state and reusable UI elements.
- **React Router**: For smooth, dynamic navigation across pages.
- **Search and Filtering**: Search Params allow precise filtering in the booking dashboard.

---

## 📌 Challenges

1. **State Management**: Implemented Context API to manage global state effectively across components, ensuring data consistency.
2. **Real-Time Data Syncing**: Integrated React Query and Supabase for efficient, real-time data updates.
3. **Modular Design**: Utilized compound components and styled-components to streamline UI while maintaining flexibility.
4. **Scalability**: Built a maintainable structure for easy scaling and feature addition.

---


## 📁 Project Structure

```sh
└── Wild-Oasis/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── default-user.jpg
    │   ├── logo-dark.png
    │   ├── logo-light.png
    │   └── vite.svg
    ├── src
    │   ├── App.jsx
    │   ├── data
    │   │   ├── Uploader.jsx
    │   │   ├── cabins
    │   │   │   ├── cabin-001.jpg
    │   │   │   ├── cabin-002.jpg
    │   │   │   ├── cabin-003.jpg
    │   │   │   ├── cabin-004.jpg
    │   │   │   ├── cabin-005.jpg
    │   │   │   ├── cabin-006.jpg
    │   │   │   ├── cabin-007.jpg
    │   │   │   └── cabin-008.jpg
    │   │   ├── data-bookings.js
    │   │   ├── data-cabins.js
    │   │   └── data-guests.js
    │   ├── features
    │   │   ├── authentication
    │   │   │   ├── LoginForm.jsx
    │   │   │   ├── SignupForm.jsx
    │   │   │   ├── UpdatePasswordForm.jsx
    │   │   │   ├── UpdateUserDataForm.jsx
    │   │   │   └── UserAvatar.jsx
    │   │   ├── bookings
    │   │   │   ├── BookingDataBox.jsx
    │   │   │   ├── BookingDetail.jsx
    │   │   │   ├── BookingRow.jsx
    │   │   │   ├── BookingTable.jsx
    │   │   │   ├── BookingTableOperations.jsx
    │   │   │   └── useBookings.js
    │   │   ├── cabins
    │   │   │   ├── AddCabins.jsx
    │   │   │   ├── CabinRow.jsx
    │   │   │   ├── CabinTable-v1.jsx
    │   │   │   ├── CabinTable.jsx
    │   │   │   ├── CabinTableOperations.jsx
    │   │   │   ├── CreateCabinForm.jsx
    │   │   │   ├── useCabins.js
    │   │   │   ├── useCreateCabin.js
    │   │   │   ├── useDeleteCabin.js
    │   │   │   └── useEditCabin.js
    │   │   ├── check-in-out
    │   │   │   ├── CheckinBooking.jsx
    │   │   │   ├── CheckoutButton.jsx
    │   │   │   ├── TodayActivity.jsx
    │   │   │   └── TodayItem.jsx
    │   │   ├── dashboard
    │   │   │   ├── DashboardBox.jsx
    │   │   │   ├── DashboardFilter.jsx
    │   │   │   ├── DashboardLayout.jsx
    │   │   │   ├── DurationChart.jsx
    │   │   │   ├── SalesChart.jsx
    │   │   │   └── Stat.jsx
    │   │   └── settings
    │   │       ├── UpdateSettingsForm.jsx
    │   │       ├── useSettings.js
    │   │       └── useUpdateSettings.js
    │   ├── hooks
    │   │   ├── useLocalStorageState.js
    │   │   ├── useMoveBack.js
    │   │   └── useOutsideClick.js
    │   ├── main.jsx
    │   ├── pages
    │   │   ├── Account.jsx
    │   │   ├── Bookings.jsx
    │   │   ├── Cabins.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Login.jsx
    │   │   ├── PageNotFound.jsx
    │   │   ├── Settings.jsx
    │   │   └── Users.jsx
    │   ├── services
    │   │   ├── apiBookings.js
    │   │   ├── apiCabins.js
    │   │   ├── apiSettings.js
    │   │   └── supabase.js
    │   ├── styles
    │   │   └── GlobalStyles.js
    │   ├── ui
    │   │   ├── AppLayout.jsx
    │   │   ├── Button.jsx
    │   │   ├── ButtonGroup.jsx
    │   │   ├── ButtonIcon.jsx
    │   │   ├── ButtonText.jsx
    │   │   ├── Checkbox.jsx
    │   │   ├── ConfirmDelete.jsx
    │   │   ├── DataItem.jsx
    │   │   ├── Empty.jsx
    │   │   ├── ErrorFallback.jsx
    │   │   ├── FileInput.jsx
    │   │   ├── Filter.jsx
    │   │   ├── Flag.jsx
    │   │   ├── Form.jsx
    │   │   ├── FormRow.jsx
    │   │   ├── Header.jsx
    │   │   ├── Heading.jsx
    │   │   ├── Input.jsx
    │   │   ├── Logo.jsx
    │   │   ├── MainNav.jsx
    │   │   ├── Menus.jsx
    │   │   ├── Modal.jsx
    │   │   ├── Pagination.jsx
    │   │   ├── Row.jsx
    │   │   ├── Select.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── SortBy.jsx
    │   │   ├── Spinner.jsx
    │   │   ├── SpinnerMini.jsx
    │   │   ├── Table.jsx
    │   │   ├── TableOperations.jsx
    │   │   ├── Tag.jsx
    │   │   └── Textarea.jsx
    │   └── utils
    │       └── helpers.js
    └── vite.config.js
```


### 📂 Project Index
<details open>
	<summary><b><code>WILD-OASIS/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/vite.config.js'>vite.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/index.html'>index.html</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/App.jsx'>App.jsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/main.jsx'>main.jsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>features</b></summary>
				<blockquote>
					<details>
						<summary><b>cabins</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/CabinTableOperations.jsx'>CabinTableOperations.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/CabinRow.jsx'>CabinRow.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/useCabins.js'>useCabins.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/CreateCabinForm.jsx'>CreateCabinForm.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/CabinTable-v1.jsx'>CabinTable-v1.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/CabinTable.jsx'>CabinTable.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/useCreateCabin.js'>useCreateCabin.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/useEditCabin.js'>useEditCabin.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/AddCabins.jsx'>AddCabins.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/cabins/useDeleteCabin.js'>useDeleteCabin.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>bookings</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/bookings/BookingTable.jsx'>BookingTable.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/bookings/BookingDetail.jsx'>BookingDetail.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/bookings/useBookings.js'>useBookings.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/bookings/BookingTableOperations.jsx'>BookingTableOperations.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/bookings/BookingDataBox.jsx'>BookingDataBox.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/bookings/BookingRow.jsx'>BookingRow.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>authentication</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/authentication/UserAvatar.jsx'>UserAvatar.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/authentication/SignupForm.jsx'>SignupForm.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/authentication/LoginForm.jsx'>LoginForm.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/authentication/UpdatePasswordForm.jsx'>UpdatePasswordForm.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/authentication/UpdateUserDataForm.jsx'>UpdateUserDataForm.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>settings</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/settings/useUpdateSettings.js'>useUpdateSettings.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/settings/useSettings.js'>useSettings.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/settings/UpdateSettingsForm.jsx'>UpdateSettingsForm.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>dashboard</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/dashboard/SalesChart.jsx'>SalesChart.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/dashboard/DashboardLayout.jsx'>DashboardLayout.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/dashboard/DurationChart.jsx'>DurationChart.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/dashboard/Stat.jsx'>Stat.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/dashboard/DashboardFilter.jsx'>DashboardFilter.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/dashboard/DashboardBox.jsx'>DashboardBox.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>check-in-out</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/check-in-out/TodayItem.jsx'>TodayItem.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/check-in-out/CheckinBooking.jsx'>CheckinBooking.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/check-in-out/TodayActivity.jsx'>TodayActivity.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/features/check-in-out/CheckoutButton.jsx'>CheckoutButton.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>styles</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/styles/GlobalStyles.js'>GlobalStyles.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/hooks/useOutsideClick.js'>useOutsideClick.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/hooks/useLocalStorageState.js'>useLocalStorageState.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/hooks/useMoveBack.js'>useMoveBack.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/pages/Settings.jsx'>Settings.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/pages/Account.jsx'>Account.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/pages/Login.jsx'>Login.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/pages/Dashboard.jsx'>Dashboard.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/pages/PageNotFound.jsx'>PageNotFound.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/pages/Cabins.jsx'>Cabins.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/pages/Users.jsx'>Users.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/pages/Bookings.jsx'>Bookings.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/utils/helpers.js'>helpers.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/services/apiSettings.js'>apiSettings.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/services/apiBookings.js'>apiBookings.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/services/supabase.js'>supabase.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/services/apiCabins.js'>apiCabins.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>ui</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Input.jsx'>Input.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Tag.jsx'>Tag.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/ButtonGroup.jsx'>ButtonGroup.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/ErrorFallback.jsx'>ErrorFallback.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Menus.jsx'>Menus.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Empty.jsx'>Empty.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Button.jsx'>Button.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Header.jsx'>Header.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Pagination.jsx'>Pagination.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/AppLayout.jsx'>AppLayout.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/ConfirmDelete.jsx'>ConfirmDelete.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Filter.jsx'>Filter.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/MainNav.jsx'>MainNav.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Modal.jsx'>Modal.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Table.jsx'>Table.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Logo.jsx'>Logo.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Sidebar.jsx'>Sidebar.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Flag.jsx'>Flag.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/SortBy.jsx'>SortBy.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/TableOperations.jsx'>TableOperations.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Textarea.jsx'>Textarea.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/ButtonIcon.jsx'>ButtonIcon.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/SpinnerMini.jsx'>SpinnerMini.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Heading.jsx'>Heading.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Form.jsx'>Form.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Spinner.jsx'>Spinner.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/ButtonText.jsx'>ButtonText.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/FileInput.jsx'>FileInput.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Select.jsx'>Select.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Checkbox.jsx'>Checkbox.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/DataItem.jsx'>DataItem.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/FormRow.jsx'>FormRow.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TheXro/Wild-Oasis/blob/master/src/ui/Row.jsx'>Row.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with Wild-Oasis, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


### ⚙️ Installation

Install Wild-Oasis using one of the following methods:

**Build from source:**

1. Clone the Wild-Oasis repository:
```sh
❯ git clone https://github.com/TheXro/Wild-Oasis
```

2. Navigate to the project directory:
```sh
❯ cd Wild-Oasis
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run Wild-Oasis using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```




## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/TheXro/Wild-Oasis/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/TheXro/Wild-Oasis/issues)**: Submit bugs found or log feature requests for the `Wild-Oasis` project.
- **💡 [Submit Pull Requests](https://github.com/TheXro/Wild-Oasis/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/TheXro/Wild-Oasis
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/TheXro/Wild-Oasis/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=TheXro/Wild-Oasis">
   </a>
</p>
</details>

---


