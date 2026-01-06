"use client";

// import styled from "styled-components";
// import { Text } from "../../Atoms/text/text";
// import NavLink from "../../Atoms/link/link";
// import { theme } from "../../../../styles/theme";
// import { navLinks } from "./component/navData";
// import { sizes } from "@/styles/sizes";
// import Icon from "../../molecules/icon/icon";
// import WomenDropdown from "./component/womenData/womenDropdown";
// import { useState } from "react";
// interface StyledIconProps {
//   sizeMobile?: number;
//   sizeTablet?: number;
//   sizeDesktop?: number;
// }

// const dropdownMap: Record<DropdownKey, React.FC> = {
//   women: WomenDropdown,
// } as const;

// const TagText = styled(Text)<{ isPink: boolean }>`
//   color: ${({ isPink }) => (isPink ? theme.colors.pink : theme.colors.black)};
// `;
// export default function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   return (
//     <NavbarWrapper>
//       {navLinks.map((item, index) => {
//         const DropdownComponent = item.dropdown
//           ? dropdownMap[item.dropdown]
//           : null;
//         return (
//           <NavItem
//             key={index}
//             onMouseEnter={() =>
//               item.dropdown && setActiveDropdown(item.dropdown)
//             }
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <MyNavLinks href={item.href}>
//               <TagText
//                 variant="h3"
//                 isPink={item.label === "Sale"}
//                 color="black"
//               >
//                 {item.label}
//               </TagText>
//               {item.dropdown && (
//                 <StyledIcon icon="dropDown" color="mediumGrey" />
//               )}
//             </MyNavLinks>
//             {DropdownComponent && activeDropdown === item.dropdown && (
//               <DropdownWrapper>
//                 <DropdownComponent />
//               </DropdownWrapper>
//             )}
//           </NavItem>
//         );
//       })}
//     </NavbarWrapper>
//   );
// }
// const NavItem = styled.li`
//   position: relative;
// `;
// const DropdownWrapper = styled.div`
//   color: ${({ theme }) => theme.colors.brightBlue};
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   position: relative;
//   transition: ease-in-out 1;
//   width: ${sizes["4xl"]}px;
//   z-index: 10;
// `;
// const NavbarWrapper = styled.ul`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   gap: ${sizes.xs}px;
//   @media (min-width: 1024px) {
//     gap: ${sizes.xl}px;
//   }
// `;
// const MyNavLinks = styled(NavLink)`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
// `;
// const StyledIcon = styled(Icon)<StyledIconProps>`
//   align-self: center;
//   width: ${({ sizeMobile = 16 }) => sizeMobile}px;
//   height: ${({ sizeMobile = 16 }) => sizeMobile}px;

//   @media (min-width: 768px) {
//     width: ${({ sizeTablet = 16 }) => sizeTablet}px;
//     height: ${({ sizeTablet = 16 }) => sizeTablet}px;
//   }

//   @media (min-width: 1024px) {
//     width: ${({ sizeDesktop = 16 }) => sizeDesktop}px;
//     height: ${({ sizeDesktop = 16 }) => sizeDesktop}px;
//     margin-left: 5px;
//   }
// `;

// "use client";

import styled from "styled-components";
import { Text } from "../../Atoms/text/text";
import NavLink from "../../Atoms/link/link";
import { theme } from "../../../../styles/theme";
import { navLinks } from "./component/navData";
import { sizes } from "@/styles/sizes";
import Icon from "../../molecules/icon/icon";
import WomenDropdown from "./component/womenData/womenDropdown";
import { useState } from "react";
interface StyledIconProps {
  sizeMobile?: number;
  sizeTablet?: number;
  sizeDesktop?: number;
}

const dropdownMap: Record<string, React.FC> = {
  women: WomenDropdown,
  // men: MenDropdown,
  // kids: KidsDropdown,
  // brands: BrandsDropdown,
};

const TagText = styled(Text)<{ isPink: boolean }>`
  color: ${({ isPink }) => (isPink ? theme.colors.pink : theme.colors.black)};
`;
export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <MainWrapper>
      <NavbarWrapper>
        {navLinks.map((item, index) => (
          <NavItem
            key={index}
            onMouseEnter={() =>
              item.dropdown && setActiveDropdown(item.dropdown)
            }
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <MyNavLinks href={item.href}>
              <TagText
                isPink={item.label === "Sale"}
                variant="h3"
                color="black"
              >
                {item.label}
              </TagText>
              {item.dropdown && <Icon icon="dropDown" color="mediumGrey" />}
            </MyNavLinks>
          </NavItem>
        ))}
      </NavbarWrapper>
      <SubMenu>
        {activeDropdown && (
          <DropdownWrapper>
            {(() => {
              const DropdownComponent = dropdownMap[activeDropdown];
              return DropdownComponent ? <DropdownComponent /> : null;
            })()}
          </DropdownWrapper>
        )}
      </SubMenu>
    </MainWrapper>
  );
}
const MainWrapper = styled.div``;
const NavItem = styled.li`
  position: relative;
`;
const SubMenu = styled.div`
  color: ${({ theme }) => theme.colors.brightBlue};
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  transition: ease-in-out 1;
  width: ${sizes["4xl"]}px;
  z-index: 10;
`;
const DropdownWrapper = styled.ul``;
const NavbarWrapper = styled.ul`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: row;
  gap: ${sizes.xs}px;
  @media (min-width: 1024px) {
    gap: ${sizes.xl}px;
  }
`;
const MyNavLinks = styled(NavLink)`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const StyledIcon = styled(Icon)<StyledIconProps>`
  align-self: center;
  width: ${({ sizeMobile = 16 }) => sizeMobile}px;
  height: ${({ sizeMobile = 16 }) => sizeMobile}px;

  @media (min-width: 768px) {
    width: ${({ sizeTablet = 16 }) => sizeTablet}px;
    height: ${({ sizeTablet = 16 }) => sizeTablet}px;
  }

  @media (min-width: 1024px) {
    width: ${({ sizeDesktop = 16 }) => sizeDesktop}px;
    height: ${({ sizeDesktop = 16 }) => sizeDesktop}px;
    margin-left: 5px;
  }
`;
