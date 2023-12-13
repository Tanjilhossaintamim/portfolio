

const Tags = ({project}) => {
  return (
    <div className="w-full flex items-center flex-wrap gap-2 mt-1">
        {project.tags?.map((tag, i) => (
          <div
            key={i}
            className="text-xs text-[#854ce6] bg-[#854ce615] py-[2px] px-2 rounded-lg"
          >
            {tag}
          </div>
        ))}
      </div>
  )
}

export default Tags