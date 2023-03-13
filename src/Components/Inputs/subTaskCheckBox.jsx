import React, { useState } from 'react'

const SubTaskCheckBox = ({ subTaskKeyValue, checkedSubTaskNum, setCheckedSubTaskNum }) => {

    const [checkPos, setCheckPos] = useState(false)

    const checked = (e) => {
        const checked1 = e.target.checked
        setCheckPos(checked1)
        if (!checkPos) {
            setCheckedSubTaskNum(checkedSubTaskNum+1)
        } else if (checkedSubTaskNum > 0) {
            setCheckedSubTaskNum(checkedSubTaskNum-1)
        }
    }


    return (
        < div className='mb-2 flex gap-1 items-center p-3 box-border rounded-[10px] border-none bg-gray-900'>
            <input
                onChange={checked}
                className='w-4 h-4 cursor-pointer mr-3' type="checkbox" />
            <label
                className={
                    checkPos ?
                        'text-[10px] line-through text-gray-400'
                        :
                        'text-[10px]'
                }>
                {subTaskKeyValue}
            </label>
        </div>
    )
}

export default SubTaskCheckBox