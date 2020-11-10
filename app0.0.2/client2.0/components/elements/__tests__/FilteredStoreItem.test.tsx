import { screen } from "@testing-library/react"
import * as React from "react"
import { render } from "../../../test/testUtils"
import FilteredStoreItem from "../FilteredStoreItem"
FilteredStoreItem

describe("<FilteredStoreItem/>", () => {
  test("when login form data is provided as a prop ", () => {
    const user: User = {
      id: "id",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      password: "password",
      role: "USER",
    }

    const rating: Rating = "one"

    const store: Store = {
      rating,
      tags: ["tag1", "tag2"],
      _id: "_id",
      name: "name",
      address: "address",
      photo: "photo",
      desc: "desc",
      author: user,
      slug: "slug",
      __v: 0,
      id: "id",
      reviews: [{ _id: "id", text: "text", rating: 2, author: user }],
    }

    render(<FilteredStoreItem store={store} />)

    expect(screen.getByText(store.name)).toBeInTheDocument()
    const storeItemLink = screen.getByTestId("filtered-store-item")
    expect(storeItemLink).toHaveAttribute("href", `/stores/store/${store.slug}`)
  })
})
