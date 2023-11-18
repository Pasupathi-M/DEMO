
//  ******************** MUI Icons
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

// *************** AppConst
import { APP_ROUTES } from "./AppRoutes";

export const SideBarMenuItems = [
  {
    title: "Meida",
    icon: <CollectionsIcon />,
    path: APP_ROUTES?.TEST2?.pathName,
    can_access: true,
    subMenusItems: [
      {
        title: "Images",
        icon: <CropOriginalIcon />,
        path: APP_ROUTES?.TEST2?.pathName,
        can_access: true,
        // subMenusItems: [
        //   {
        //     title: "1111111",
        //     icon: <MmsIcon />,
        //     path: APP_ROUTES?.TEST2?.pathName,
        //     can_access: true,
        //     subMenusItems: [
        //       {
        //         title: "2222222222",
        //         icon: <MmsIcon />,
        //         path: APP_ROUTES?.TEST2?.pathName,
        //         can_access: true,
        //         subMenusItems: [
        //           {
        //             title: "5555555555555555",
        //             icon: <MmsIcon />,
        //             path: APP_ROUTES?.TEST2?.pathName,
        //             can_access: true,
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // ],
      },
      {
        title: "Videos",
        icon: <VideoCameraBackIcon />,
        path: APP_ROUTES?.TEST2?.pathName,
        can_access: true,
      },
    ],
  },
//   {
//     title: "Meida",
//     icon: <MmsIcon />,
//     path: APP_ROUTES.TEST2.pathName,
//     can_access: true,
//     subMenusItems: [
//       {
//         title: "77777777777777",
//         icon: <MmsIcon />,
//         path: APP_ROUTES?.TEST2?.pathName,
//         can_access: true,
//       },
//     ],
//   },
//   {
//       title: 'Meida',
//       icon: <MmsIcon />,
//       path: APP_ROUTES.MEDIA.pathName,
//       can_access: true
//   },
//   {
//       title: 'Meida',
//       icon: <MmsIcon />,
//       path: APP_ROUTES.MEDIA.pathName,
//       can_access: true
//   },
  // {
  //     title: 'Meida',
  //     icon: <MmsIcon />,
  //     path: APP_ROUTES.MEDIA.pathName,
  //     can_access: true
  // },
  // {
  //     title: 'Meida',
  //     icon: <MmsIcon />,
  //     path: APP_ROUTES.MEDIA.pathName,
  //     can_access: true
  // },
  // {
  //     title: 'Meida',
  //     icon: <MmsIcon />,
  //     path: APP_ROUTES.MEDIA.pathName,
  //     can_access: true
  // },
  // {
  //     title: 'Meida',
  //     icon: <MmsIcon />,
  //     path: APP_ROUTES.MEDIA.pathName,
  //     can_access: true
  // },
  // {
  //     title: 'Meida',
  //     icon: <MmsIcon />,
  //     path: APP_ROUTES.MEDIA.pathName,
  //     can_access: true
  // },
  // {
  //     title: 'Meida',
  //     icon: <MmsIcon />,
  //     path: APP_ROUTES.MEDIA.pathName,
  //     can_access: true
  // },
  // {
  //     title: 'Meida',
  //     icon: <MmsIcon />,
  //     path: APP_ROUTES.MEDIA.pathName,
  //     can_access: true
  // },
  // {
  //     title: 'Meida',
  //     icon: <MmsIcon />,
  //     path: APP_ROUTES.MEDIA.pathName,
  //     can_access: true
  // }
];
