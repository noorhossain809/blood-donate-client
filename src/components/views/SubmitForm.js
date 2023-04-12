import React, { useReducer } from 'react'
import img from '../../assets/images/appointment.jpg'

const SubmitForm = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    donate: '',
    date: '',
    time: '',
    description: '',
  }

  const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case 'INPUT':
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
  }
  return (
    <div className="container mx-auto px-16">
      <div className="grid md:grid-cols-2">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <div className="card mt-10 flex-shrink-0 shadow-2xl bg-gray-200 rounded-none">
            <div className="bg-[#FE3C47] py-8">
              <h1 className="text-center text-3xl sm:text-xl text-white">
                REQUEST APPOINTMENT
              </h1>
            </div>
            <div className="card-body justify-center">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: 'INPUT',
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      className="input input-bordered w-auto border-none  rounded-none focus:outline-none"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: 'INPUT',
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input border-none w-auto rounded-none focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: 'INPUT',
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      required
                      className="input input-bordered w-auto border-none  rounded-none focus:outline-none"
                    />
                  </div>
                  <div className="form-control">
                    <select
                      onBlur={(e) =>
                        dispatch({
                          type: 'INPUT',
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      name="donate"
                      required
                      className="select text-gray-400 max-w-xs w-auto border-none  rounded-none focus:outline-none"
                    >
                      <option disabled selected>
                        Donation Center
                      </option>
                      <option>Homer</option>
                      <option>Marge</option>
                      <option>Bart</option>
                      <option>Lisa</option>
                      <option>Maggie</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: 'INPUT',
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="date"
                      name="date"
                      placeholder="Date"
                      required
                      className="input input-bordered w-auto border-none  rounded-none focus:outline-none"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: 'INPUT',
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="time"
                      name="time"
                      required
                      placeholder="Time"
                      className="input border-none w-auto rounded-none focus:outline-none"
                    />
                  </div>
                </div>
                <textarea
                  onBlur={(e) =>
                    dispatch({
                      type: 'INPUT',
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  name="description"
                  required
                  className="textarea py-6 mt-2 w-full rounded-none focus:outline-none"
                  placeholder="Your Message..."
                ></textarea>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#FE3C47] border-none hover:bg-[#d3010d] rounded-none mx-auto"
                  >
                    Get Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitForm
