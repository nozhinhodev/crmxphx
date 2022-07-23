// ** Icons Import
import { Users, Copy, Circle, Box, Package, RotateCw, AlertTriangle } from 'react-feather'

export default [
  {
    header: 'Страницы'
  },
  {
    id: 'list',
    title: 'Менторы',
    icon: <Users size={12} />,
    navLink: '/apps/mentor/list'
  },
  {
    id: 'list',
    title: 'Ученики',
    icon: <Users size={12} />,
    navLink: '/apps/student/list'
  }
]
