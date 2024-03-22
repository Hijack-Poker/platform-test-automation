export default {
  club_management_page: {
    tab_button: 'span.MuiListItemText-primary',
    constant_button: 'button.MuiButton-containedPrimary',
    management_hyper_link: '.css-md43ih',
    club_location_dropdown: '.css-osqbhm',
    logout_button: 'span[style="color: white;"]',
    home_button: "[class='MuiTypography-root MuiTypography-body2 css-12axuq1'] [aria-hidden]"
  },
  users_management_page: {
    search_employee_txtbox: 'input#mui-8',
    status_check_box: 'input[type="checkbox"]',
    view_profile_button: '.MuiButton-outlinedPrimary',
    next_page_button: 'li:nth-of-type(5) [focusable]',
    items_per_page_button: 'div#items-per-page-select',
    items_select_option: 'li',
    previous_page_button: '.MuiPagination-ul li:nth-of-type(2) [focusable]',
    user_table_data: 'td'
  },
  profile_page: {
    name_box: "form[role='form'] > div:nth-of-type(1)",
    email_box: "form[role='form'] > div:nth-of-type(2)",
    profile_button: 'button',
    profile_text_finder: 'p.MuiTypography-root.MuiTypography-body1',
    basic_info_container_txt: '.PlayerProfile_player_profile_data_container__a5YOv p.MuiTypography-root.MuiTypography-body1.css-clc4di'
  },
  cash_adjustment: {
    modal_box: "div[role='presentation'] > div[role='dialog']",
    transaction_type_txtbox: "div#transaction-type-select > .notranslate",
    transaction_amount_txtbox: "[inputmode] [type]",
    reference_code_number: 'textarea#reference-code',
    transaction_description: 'textarea#description',
    alert_popup: '.MuiAlert-message',
    outside_header: '.MuiAppBar-positionSticky',
    error_messages_modal: ' .MuiFormHelperText-sizeMedium',
    withdraw_list_option: "[role='listbox'] [tabindex='0']",
    deposit_list_option: "[role='listbox'] [tabindex='-1']",
    transaction_date_time_data: '[class] tr:nth-of-type(1) .MuiTableCell-body.MuiTableCell-alignCenter',
    modal_header: '.MuiDialogTitle-root',
    modal_text: '.MuiBox-root.css-0 > h2',
    cash_on_hand_txtbox: 'input#outlined-adornment-transaction-amount',
    modal_title_txt: "[data-shrink='true']",
  },
  employee_clock_in: {
    employee_name_label: 'label#select-employee-label',
    employee_select_bar: "input#select-employee",
    employee_list: "ul#select-employee-listbox",
    employee_name_list: '.MuiAutocomplete-option',
    employee_total_cash_float: "div[role='dialog'] p"
  }
};