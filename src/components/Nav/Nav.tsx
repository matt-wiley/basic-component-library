import React, { useEffect } from "react";
import Button from "../Button";
import { ButtonSize, ButtonType } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export interface NavItems {
  [label: string]: string;
}

export interface INavProps {
  buttonType?: ButtonType | string;
  buttonSize?: ButtonSize | string;
  navItems: NavItems;
}

const Nav = (props: INavProps) => {

  const navigateInRouter = useNavigate();
  const navigateOnWeb = (url: string) => {
    window.location.assign(url)
  }

  const { buttonType, buttonSize, navItems } = props;



  return (
    <div className="flex flex-row justify-center align-middle">
      {
        Object.keys(navItems).map((locationName, index) => {
          const path = navItems[locationName]
          return (
            <Button
              key={index}
              size={buttonSize || ButtonSize.Medium}
              type={buttonType || ButtonType.Link}
              label={locationName}
              tooltip={path}
              onClick={() => {
                if (path.startsWith("http")) {
                  navigateOnWeb(path)
                  return
                }
                else {
                  useEffect(() => {
                    navigateInRouter(path)
                  })
                }
              }} />
          )
        })
      }
    </div>
  );
};

export default Nav;