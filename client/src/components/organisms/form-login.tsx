"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Email harus diisi"),
  password: Yup.string().required("Kata sandi harus diisi"),
});

export default function FormLogin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="divider">
          <h2 className="card-title">Masuk</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Email atau Kata Sandi Salah</span>
          </div>

          <div className="form-control w-full max-w-sm">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-sm"
            />
            <label className="label">
              {errors.email && touched.email && (
                <span className="label-text-alt text-error">
                  {errors.email}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-sm">
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-sm"
            />
            <label className="label">
              {errors.password && touched.password && (
                <span className="label-text-alt text-error">
                  {errors.password}
                </span>
              )}
            </label>
          </div>

          <button className="btn btn-block" type="submit">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
