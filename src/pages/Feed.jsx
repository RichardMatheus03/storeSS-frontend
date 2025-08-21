import SearchInput from "../components/SearchInput/SearchInput"

export default function Feed() {
  return (
    <div className="tw-flex tw-p-3 tw-bg-gray-100 tw-w-full tw-shadow-md">
      <SearchInput placeholder={"Buscar produtos"} />
    </div>
  )
}
