/************************************************
 * This file holds configuration for the top menu
 * There are two types of object items:
 * hash - id tag in the front page, clicking this item will scroll to that section in the page.
 {
    type: "hash", // type is hash
    label: "Top", // label in the top menu
    tag: "top-section", // id to scroll to
  },
 * link - this menu item will push a new route to the router.
 {
    type: "link", // type is link
    label: "link 1", // label in the top menu
    link: "/link1", // new route
  },
 ******************************/

const menuList = [
  {
    type: "hash",
    label: "Top",
    tag: "top-section",
  },
  {
    type: "hash",
    label: "Item 1",
    tag: "item1",
  },
  {
    type: "hash",
    label: "Item 2",
    tag: "item2",
  },
  {
    type: "link",
    label: "page 1",
    link: "/page1",
  },
  {
    type: "link",
    label: "page 2",
    link: "/page2",
  },
];

export default menuList;
