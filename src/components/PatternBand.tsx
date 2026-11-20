import nurayaPatternTile from '../assets/nuraya_pattern_tile.svg'
import { cn } from '../lib/utils'

interface PatternBandProps {
  /** Rendered tile width in px, clear space included. The tile is 1:3.27, so its height follows. */
  tile?: number
  className?: string
}

/**
 * The brandbook pattern: one tile, one orientation, repeated whole and crisp. The tile carries
 * its own clear space, and `background-repeat: space` spreads any leftover room into the gaps,
 * so a tile is never cropped mid-shape and never touches its neighbor. A single element
 * replaces a grid of images.
 */
export function PatternBand({ tile = 56, className }: PatternBandProps) {
  return (
    <div
      aria-hidden='true'
      className={cn('pointer-events-none select-none', className)}
      style={{
        backgroundImage: `url("${nurayaPatternTile}")`,
        backgroundSize: `${tile}px auto`,
        backgroundRepeat: 'space',
        backgroundPosition: 'center',
      }}
    />
  )
}
