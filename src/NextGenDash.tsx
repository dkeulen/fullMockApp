import React from "react";
import sizeMe, { SizeMe } from "react-sizeme";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useMediaQuery, useTheme } from "@mui/material";

import { ApplicationContext } from "./ApplicationContext";
import DashboardWidgetContainer from "./DashboardWidgetContainer";
import { DashBoardItem } from "./Assets/NextGen/Types";

const getFromLS = (key: string) => {
  let ls: any = {};
  if (localStorage) {
    try {
      ls = JSON.parse(localStorage.getItem("nextGenLayout")) || {};
    } catch (e) {
      /* ignore */
    }
  }
  return ls[key];
};

const saveToLS = (key: string, value: any) => {
  if (localStorage) {
    localStorage.setItem(
      "nextGenLayout",
      JSON.stringify({
        [key]: value
      })
    );
  }
};

const originalLayouts = getFromLS("layouts") || {};

// function ItemComponent({
//   percentWidth,
//   className,
//   style = {},
//   children,
//   ...otherProps
// }: {
//   percentWidth?: string;
//   className?: string;
//   key?: string;
//   style?: { [x: string]: string };
//   children?: React.ReactElement<any, any>;
// }) {
//   return (
//     <div
//       {...otherProps}
//       style={{
//         border: "1px solid black",
//         width: "66%",
//         ...style
//       }}
//       className={className}
//     >
//       {children}
//     </div>
//   );
// }

interface NextGenDashProps {
  sideMenuOpen: boolean;
}

const NextGenDash: React.FC<NextGenDashProps> = ({ sideMenuOpen }) => {
  const theme = useTheme();
  const mediaQueryXl = useMediaQuery(theme.breakpoints.up("xl"));

  const [breakPointXL, setBreakPointXl] = React.useState<boolean>(
    useMediaQuery(theme.breakpoints.up("xl"))
  );
  const { activeWidgets } = React.useContext(ApplicationContext);
  const [currentLayouts, setCurrentLayouts] = React.useState(
    JSON.parse(JSON.stringify(originalLayouts))
  );
  const gridSpacing = parseInt(theme.spacing(2));

  const ResponsiveGridLayout = React.useMemo(
    () => WidthProvider(Responsive),
    []
  );

  const onLayoutChange = (layout: string, layouts: any) => {
    saveToLS("layouts", layouts);
    setCurrentLayouts(layouts);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setBreakPointXl(mediaQueryXl);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  // const itemWidthPercentage = (
  //   widget: DashBoardItem,
  //   containerWidth: number
  // ) => {
  //   const widgetWidth: number = breakPointXL
  //     ? widget.gridItemProps.xl.w
  //     : widget.gridItemProps.lg.w;
  //   const colWidth: number = containerWidth / 12;
  //   console.log(
  //     "percent width",
  //     `${((widgetWidth * colWidth) / containerWidth) * 100}% !important`
  //   );
  //   return `${((widgetWidth * colWidth) / containerWidth) * 100}% !important`;
  // };

  return (
    <SizeMe>
      {({ size }) => (
        <ResponsiveGridLayout
          className="layout"
          layouts={currentLayouts}
          breakpoints={{
            lg: theme.breakpoints.values.lg,
            xl: theme.breakpoints.values.xl
          }}
          cols={{ lg: 12, xl: 12 }}
          containerPadding={[0, 0]}
          margin={[gridSpacing, gridSpacing]} // spacing between grid items
          rowHeight={110} // height of 1 grid row, example: item h: 1 = 1 grid row, so h:2 = 100px, item height + spacing
          useCSSTransforms={false}
          measureBeforeMount={false}
          onLayoutChange={(layout: string, layouts: any) =>
            onLayoutChange(layout, layouts)
          }
        >
          {activeWidgets.map((widget) => {
            if (widget.active) {
              return (
                // <ItemComponent
                //   key={`${widget.id}`}
                //   data-grid={
                //     breakPointXL
                //       ? { ...widget.gridItemProps.xl }
                //       : { ...widget.gridItemProps.lg }
                //   }
                //   percentWidth={itemWidthPercentage(widget, size.width!)}
                // >
                //   <DashboardWidgetContainer
                //     title={widget.title}
                //     disablePadding={widget.disablePadding}
                //     action={widget.action}
                //     sx={{ height: "100%" }}
                //   >
                //     {React.createElement(widget.component)}
                //   </DashboardWidgetContainer>
                // </ItemComponent>
                <div
                  key={widget.id}
                  data-grid={
                    breakPointXL
                      ? { ...widget.gridItemProps.xl }
                      : { ...widget.gridItemProps.lg }
                  }
                >
                  <DashboardWidgetContainer
                    title={widget.title}
                    disablePadding={widget.disablePadding}
                    divider={widget.divider}
                    action={widget.action}
                    sx={{ height: "100%" }}
                  >
                    {React.createElement(widget.component)}
                  </DashboardWidgetContainer>
                </div>
              );
            } else {
              return null;
            }
          })}
        </ResponsiveGridLayout>
      )}
    </SizeMe>
  );
};

export default NextGenDash;
