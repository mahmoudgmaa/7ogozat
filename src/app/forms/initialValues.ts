export const sign_up_initial_values = {
  email: "",
  password: "",
  confirmation_password: "",
};

export const login_initial_values = {
  email: "",
  password: "",
};

export const business_info_values = {
  en_name: "",
  ar_name: "",
  phone_number: "",
  email: "",
  address: "",
  website_url: "",
  facebook_link: "",
  linkedin_link: "",
  instagram_link: "",
};

export const dashboard_initial_values:any = {
  "Business Info": {
    en_name: "",
    ar_name: "",
    phone_number: "",
    email: "",
    address: "",
    website_url: "",
    facebook_link: "",
    linkedin_link: "",
    instagram_link: "",
  },
  Categories: {
    en_name: "",
    ar_name: "",
    en_description: "",
    ar_description: "",
  },
  Staff: {
    en_name: "",
    ar_name: "",
    en_description: "",
    ar_description: "",
    phone_number: "",
    email: "",
    sunday: [
      {
        start: new Date(),
        end: new Date(),
      },
    ],
    monday: [
      {
        start: new Date(),
        end: new Date(),
      },
    ],
    tuesday: [
      {
        start: new Date(),
        end: new Date(),
      },
    ],
    wednesday: [
      {
        start: new Date(),
        end: new Date(),
      },
    ],
    thursday: [
      {
        start: new Date(),
        end: new Date(),
      },
    ],
    friday: [
      {
        start: new Date(),
        end: new Date(),
      },
    ],
    saturday: [
      {
        start: new Date(),
        end: new Date(),
      },
    ],
  },
  services: {
    en_name: "",
    ar_name: "",
    en_description: "",
    ar_description: "",
    price: "",
    tax: "",
    staff_multiselect: "",
    time_block_off_before: "",
    time_block_off_after: "",
    deposit: "",
    cancelation_time_before_appointment: "",
    cancelation_time_option: "hour",
  },
  business_policy: {
    fewer_time_in_advance: "",
    fewer_time_in_advance_option: "hour",
    fewer_time_in_future: "",
    fewer_time_in_future_option: "hour",
    cancelation_time_before_appointment: "",
    cancelation_time_option: "hour",
    deposit: "",
    payment_method: {
      fawry: false,
      credit_card: false,
      cash_on_arrival: true,
    },
  },
};
