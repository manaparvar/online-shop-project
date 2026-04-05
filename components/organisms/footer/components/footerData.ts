import { IconName } from "@/components/atoms/icon/component/iconData";

type props = {
  socialLogo: IconName;
  socialLogoUrl: string;
};

export const footerData = {
  columns: {
    title: "Logo",
    logoIcon: "",
    items: [
      {
        label: "Shop",
        titel: "true",
        items: [
          { label: "Women", to: "./women" },
          { label: "Men", to: "/men" },
          { label: "Kids", to: "/kids" },
          { label: "Blog", to: "/blog" },
        ],
      },
      {
        label: "Company",
        titel: "true",
        items: [
          { label: "Jobs", to: "/jobs" },
          { label: "Policies", to: "/policies" },
          { label: "About us", to: "/about" },
          { label: "Contact us", to: "/contact-us" },
        ],
      },
      {
        label: "Support",
        titel: "true",
        items: [
          { label: "FAQ", to: "/jobs" },
          { label: "Help", to: "/help" },
          { label: "Delivery", to: "./delivery" },
          { label: "Return goods", to: "/jobs" },
        ],
      },
      {
        label: "Shopping Guide",
        titel: "true",
        items: [
          { label: "How to place an order", to: "/jobs" },
          { label: "Payment methods", to: "/jobs" },
          { label: "Shipment procedure", to: "/jobs" },
        ],
      },
    ],
  },
  widgets: {
    items: [
      {
        type: "social",
        title: "Contact",
        phoneNumber: "+49 000 000-00",
        socialLinks: [
          {
            socialLogo: "instagram",
            socialLogoUrl: "./instagram",
          },
          {
            socialLogo: "twitter",
            socialLogoUrl: "./x",
          },
          {
            socialLogo: "facebook",
            socialLogoUrl: "./facebook",
          },
          {
            socialLogo: "youtube",
            socialLogoUrl: "./youtube",
          },
        ] as Array<props>,
      },
      {
        type: "newsletter",
        title: "Stay with us!",
        description: "Subscribe to our newsletter.",
      },
    ],
  },
};
