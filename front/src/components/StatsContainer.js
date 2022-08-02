import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: 'Aplicaciones pendientes',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: 'var(--yellow-airu)',
      bcg: 'var(--yellow-light)',
    },
    {
      title: 'Entrevistas programadas',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: 'var(--second-airu)',
      bcg: 'var(--second-light)',
    },
    {
      title: 'Trabajos rechazados',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: 'var(--red-airu)',
      bcg: 'var(--red-light)',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
