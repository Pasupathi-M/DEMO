/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

// *************** React router dom

import { Link, useNavigate } from "react-router-dom";

// **************** MUI
import { List, ListItemButton, Tooltip } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// **************** APP_DATA
import { SideBarMenuItems } from "../../../../data/SideBarData";

// ************************ util
import { RANDOM_UNIQUE } from "../../../../utils/getUnique";

const STR_LEN = 11;

const SUB_MENU_LIST_BTN = {
  
    minHeight: 48,
    justifyContent: "initial",
    marginLeft: '10px'
  
}

const SubMenus = (prop: any): JSX.Element => {
  const { subMenusItems, position } = prop;

  console.log("subMenusItems >>>>>>>>>>>>>", subMenusItems);

  const navigate = useNavigate();

  const [openChildSubMenu, setOpenChildSubMenu] = useState<any>({});

  // ********************* useEffect ******************
  useEffect(() => {
    const obj: any = {};
    subMenusItems?.forEach((_item: any, index: number) => {
      obj[`${position}${index}`] = false;
    });
    setOpenChildSubMenu({ ...openChildSubMenu });
  }, []);

  return (
    <>
      <List key={RANDOM_UNIQUE()}>
        {subMenusItems?.map((menu: Record<any, any>, index: number) => {
          return (
            menu.can_access &&
            (menu.title?.length > STR_LEN ? (
              <>
                <Tooltip title={menu.title} key={RANDOM_UNIQUE()}>
                  <ListItemButton
                    sx={SUB_MENU_LIST_BTN}
                    onClick={() => {
                      if (
                        menu?.subMenusItems &&
                        menu?.subMenusItems?.length > 0
                      ) {
                        setOpenChildSubMenu({
                          ...openChildSubMenu,
                          [`${position}${index}`]: !openChildSubMenu[`${position}${index}`],
                        });
                      } else {
                        menu?.path ? navigate(menu?.path) : false;
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                      }}
                    >
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        menu.title?.length > STR_LEN
                          ? menu.title?.substr(0, 15) + "..."
                          : menu.title
                      }
                      sx={{ opacity: 1 }}
                    >
                      {menu?.path && <Link to={menu?.path} />}
                    </ListItemText>
                    {menu?.subMenusItems && menu?.subMenusItems?.length > 0 && (
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          // mr: true ? 1 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <ArrowRightIcon />
                      </ListItemIcon>
                    )}
                  </ListItemButton>
                </Tooltip>
                {openChildSubMenu[`${position}${index}`] && (
                  <SubMenus subMenusItems={menu.subMenusItems} position={index}/>
                )}
              </>
            ) : (
              <>
                <ListItemButton
                  sx={SUB_MENU_LIST_BTN}
                  onClick={() => {
                    if (
                      menu?.subMenusItems &&
                      menu?.subMenusItems?.length > 0
                    ) {
                      setOpenChildSubMenu({
                        ...openChildSubMenu,
                        [`${position}${index}`]: !openChildSubMenu[`${position}${index}`],
                      });
                    } else {
                      menu?.path ? navigate(menu?.path) : false;
                    }
                  }}
                  key={RANDOM_UNIQUE()}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: "center",
                      // padding: 2
                    }}
                  >
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText primary={menu.title} sx={{ opacity: 1 }} />
                  {menu?.subMenusItems && menu?.subMenusItems?.length > 0 && (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        // mr: true ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <ArrowRightIcon />
                    </ListItemIcon>
                  )}
                </ListItemButton>
                {openChildSubMenu[`${position}${index}`] && (
                  <SubMenus subMenusItems={menu.subMenusItems} position={index}/>
                )}
              </>
            ))
          );
        })}
      </List>
    </>
  );
};
export const SideBarMenus = () => {
  const navigate = useNavigate();

  const [openSubmenu, setOpenSubmenu] = useState<Record<string, boolean>>({});

  // ************************  useEffect ***********************
  useEffect(() => {
    const obj: Record<string, boolean> = {};
    SideBarMenuItems.forEach((_item: any, index: number) => {
      obj[index] = false;
    });
    setOpenSubmenu({ ...obj });
  }, []);

  return (
    <>
      <List key={RANDOM_UNIQUE()}>
        {SideBarMenuItems.map(
          (menu: Record<any, any>, index: number) =>
            menu.can_access &&
            (menu.title?.length > STR_LEN ? (
              <>
                <Tooltip title={menu.title} key={RANDOM_UNIQUE()}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "initial",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                      }}
                    >
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        menu.title?.length > STR_LEN
                          ? menu.title?.substr(0, 15) + "..."
                          : menu.title
                      }
                      sx={{ opacity: 1 }}
                    >
                      {menu?.path && <Link to={menu?.path} />}
                    </ListItemText>
                  </ListItemButton>
                </Tooltip>
                {openSubmenu[index] && <SubMenus menus={menu} />}
              </>
            ) : (
              <>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "initial",
                    // px: 2.5,
                  }}
                  onClick={() => {
                    if (
                      menu?.subMenusItems &&
                      menu?.subMenusItems?.length > 0
                    ) {
                      setOpenSubmenu({
                        ...openSubmenu,
                        [index]: !openSubmenu[index],
                      });
                    } else {
                      menu?.path ? navigate(menu?.path) : false;
                    }
                  }}
                  key={RANDOM_UNIQUE()}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: "center",
                      // padding: 2
                    }}
                  >
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText primary={menu.title} sx={{ opacity: 1 }} />
                  {menu?.subMenusItems && menu?.subMenusItems?.length > 0 && (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        // mr: true ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <ArrowRightIcon />
                    </ListItemIcon>
                  )}
                </ListItemButton>
                {openSubmenu[index] && (
                  <SubMenus subMenusItems={menu.subMenusItems} />
                )}
              </>
            ))
        )}
      </List>
    </>
  );
};
