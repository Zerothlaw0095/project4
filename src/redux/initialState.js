import { icons } from "../assets";
import CommandLineApp from "../comps/CommandLineApp";
import FileExplorerApp from "../comps/FileExplorerApp";
import SettingsApp from "../comps/SettingsApp";
import { WIN_FEATURES } from "../const/winSize";
import { newActiveWindow } from "./feat/desktopSlice";

const initialState = {
  activeWindows: [],
  pinnedApps: [
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 25,
      height: 25,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 28,
      height: 28,
      onClick: () => {
        const textMessage = encodeURIComponent(
          "Hello Akash Pathak, [your message here]"
        );
        window.open(
          `https://wa.me/+919811734423?text=${encodeURIComponent(textMessage)}`,
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Google Chrome",
      icon: icons.apps.chrome,
      width: 28,
      height: 28,
      onClick: () => {
        window.open(
          "https://www.google.com/search?q=Akash+Pathak+github",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 28,
      height: 28,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 28,
      height: 28,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
  ],
  shortcutApps: [
    {
      name: "Google Chrome",
      icon: icons.apps.chrome,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://www.google.com/search?q=Akash+Pathak+vit+vellore",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "GitHub",
      icon: icons.apps.github,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://github.com/Zerothlaw0095",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "LinkedIn",
      icon: icons.apps.linkedin,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://github.com/Zerothlaw0095",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 35,
      height: 35,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 35,
      height: 35,
      onClick: () => {
        const textMessage = encodeURIComponent(
          "Hello Akash Pathak, [your message here]"
        );
        window.open(
          `https://wa.me/+919811734423?text=${encodeURIComponent(textMessage)}`,
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Command Prompt",
      icon: icons.apps.winCMD,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "C:\\Windows\\system32\\cmd.exe",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: CommandLineApp,
          })
        );
      },
    },
    // {
    //   name: "Windows Defender",
    //   icon: icons.apps.winDefender,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "Mail",
      icon: icons.apps.winMail,
      width: 35,
      height: 35,
      onClick: () => (window.location.href = "mailto:akashpathak07062004@gmail.com"),
    },
    // {
    //   name: "Search",
    //   icon: icons.apps.winSearch,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
    // {
    //   name: "Trash Full",
    //   icon: icons.apps.winTrashFull,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "My Earlier Projects",
      icon: icons.apps.github,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://github.com/Zerothlaw0095",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Our Project",
      icon: icons.apps.dkPortfolio,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://ecommerceblend.netlify.app/",
          "_blank",
          WIN_FEATURES
        );
      },
    },
  ],
};

export default initialState;
