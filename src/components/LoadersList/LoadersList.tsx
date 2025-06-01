import './LoadersList.css'
import { useState } from 'react'
import { Loader } from '../Loader/Loader'
import type { LoaderTitle } from '../../types/LoaderTitle'

type Props = {
  loadersTitles: LoaderTitle[]
}

export const LoadersList: React.FC<Props> = (props) => {
  const { loadersTitles } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextLoader = () => {
    setCurrentIndex((prev) => (prev < loadersTitles.length - 1 ? prev + 1 : prev))
  }

  return (
    <div className="loaders-list">
      {loadersTitles.map((loaderTitle, index) => (
        <Loader
          key={loaderTitle.id}
          loaderTitle={loaderTitle}
          isActive={index === currentIndex}
          onComplete={handleNextLoader}
        />
      ))}
    </div>
  )
}
