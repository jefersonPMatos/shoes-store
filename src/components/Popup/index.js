import React from "react";
import { ShoppingCart, X } from "phosphor-react";
import { Popover } from "@headlessui/react";

import { styles } from "./styles";
import { Box } from "../Box";
import { Column } from "../Column";

export function Popup({ children }) {
  return (
    <Popover>
      <Popover.Button style={styles.reset}>
        <ShoppingCart size={60} cursor="pointer" style={styles.cartButton} />
      </Popover.Button>

      <Popover.Panel style={styles.popoverPainel}>
        <Column>
          <Box h="20px" />
          <Popover.Button style={styles.closeButton}>
            <X size={20} cursor="pointer" />
          </Popover.Button>
          <Box h="20px" />
          {children}
        </Column>
      </Popover.Panel>
    </Popover>
  );
}
