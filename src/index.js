import React from 'react'
import { useFunction } from './hooks'
import {
  getPosition,
  getColumnCount,
  getRowCount,
  evaluatePosition,
  resizeBars,
  finishEditingBars
} from './helpers'
import { checkCollisions } from './collision'
import reserverReducer from './reserverReducer'
import RowTitle from './RowTitle'
import useReserver from './useReserver'
import actionTypes from './actionTypes'
import Bar from './Bar'
import Head from './Head'
import Cell from './Cell'
import Peg from './Peg'
import Tag from './Tag'
import useFuncOrObj from './hooks/useFuncOrObj'

/* TODO:
Test accessibility
Assign content to top left area
make dimention of grid not necessarily square
*/

const Reserver = React.forwardRef((props, ref) => {
  const rowCount = useFunction(getRowCount, props.dimension, props.height)
  const columnCount = useFunction(
    getColumnCount,
    props.dimension,
    props.width,
    props.rowTitleWidth
  )

  const rowTitles = useArrFunc(props.rowTitles)
  const columnTitles = useArrFunc(props.columnTitles, columnCount)
  const content = useFuncOrObj(props.content, columnCount, rowCount)
  const dimension = useDimension(props.dimension)
  return (
    <div
      ref={ref}
      id={props.id}
      className={props.className}
      role='grid'
      onMouseLeave={props.mouseLeaveGrid}
      style={{ ...props.style, position: 'relative' }}
    >
      <Head
        columnTitles={columnTitles}
        columnCount={columnCount}
        rowTitleWidth={props.rowTitleWidth}
        dimension={dimension}
        dir={props.dir}
        onMouseOverCell={props.mouseOverCellHead}
      />
      {[...Array(rowCount)].map((x, r) => {
        return (
          <div
            role='rowgroup'
            className={styles.row}
            key={r}
            style={{ height: props.dimension, display: 'flex' }}
          >
            {props.dir === 'ltr' && (
                dimension={{ height: dimension.height, width: props.rowTitleWidth }}
              >
                {rowTitles[r]}
              </RowTitle>
            )}
            {[...Array(columnCount)].map((x, c) => {
              return (
                <Cell
                  key={`r${r}c${c}`}
                  onMouseDown={props.mouseDownCell}
                  onMouseEnter={props.mouseEnterCell}
                  onMouseUp={props.mouseUpCell}
                  onDrop={props.mouseDropCell}
                  onDragOver={props.mouseDragOverCell}
                  dimension={dimension}
                  className={props.cellClassName}
                  column={c}
                  row={r}
                >
                  {content[`r${r}c${c}`]}
                </Cell>
              )
            })}
            {props.dir === 'rtl' && (
                dimension={{ height: dimension.height, width: props.rowTitleWidth }}
              >
                {rowTitles[r]}
              </RowTitle>
            )}
          </div>
        )
      })}

      <div role='list'>
        {typeof props.children === 'function' &&
          props.children({
            rowCount: rowCount,
            columnCount: columnCount,
            rowTitleWidth: props.rowTitleWidth,
            dimension: dimension,
          })}
        {Array.isArray(props.children) && props.children}
      </div>
    </div>
  )
})
function createBar(dimension, startLocation) {
  return {
    id: makeId(),
    length: 1,
    dimension: dimension,
    editing: true,
    ...startLocation
  }
}

export default Reserver;

export {
  Tag,
  Bar,
  Peg,
  reserverReducer,
  actionTypes,
  makeId,
  useReserver,
  getPosition,
  evaluatePosition,
  createBar,
  resizeBars,
  Reserver,
  finishEditingBars,
  checkCollisions
}

Reserver.defaultProps = {
  columnTitles: [],
  rowTitles: [],
  content: {},
  dimension: 20,
  width: 500,
  height: 500,
  rowTitleWidth: 0,
  dir: 'ltr',
  mouseEnterCell: () => { },
  mouseDownCell: () => { },
  mouseUpCell: () => { },
  mouseDragOverCell: () => { },
  mouseDropCell: () => { },
  mouseLeaveGrid: () => { }
}
