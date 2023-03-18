import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";

import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  fullname: yup
    .string()
    .required("Fullname is required"),
  subject: yup
    .string()
    .required("Subject is required"),
  message: yup
    .string()
    .required("Message is required"),
});

interface Inputs {
  email: string;
  fullname: string;
  subject: string;
  message: string;
}

type Props = {}

const ContactForm = (props: Props) => {
  const { register, reset, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: Inputs) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => {
        toast.success("Thanks for reaching out! I'll be in touch soonest");
        reset();
      })
      .catch((error) => {
        toast.error("Oops! Something went wrong. Gotta fix it now :(");
      });
  };

  return (
    <form name="contact-form" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit(onSubmit)}>
      <Toaster />
      <input type="hidden" name="contact-form" value="contact-form" />
      <div className="flex flex-col mb-4">
        <label className="font-medium mb-2">Full Name</label>
        <input
          className="border-2 focus:outline-pink-900 rounded p-4"
          placeholder={errors.fullname?.message || "You Fullname"}
          {...register("fullname")}
        />
        {<span className='text-sm italic text-red-700'>{errors.fullname?.message}</span>}
      </div>
      <div className="flex flex-col mb-4">
        <label className="font-medium mb-2">Email address</label>
        <input
          type={"email"}
          className="border-2 focus:outline-pink-900 rounded p-4"
          placeholder={errors.email?.message || "You email address"}
          {...register("email")}
        />
        {<span className='text-sm italic text-red-700'>{errors.email?.message}</span>}
      </div>
      <div className="flex flex-col mb-4">
        <label className="font-medium mb-2">Subject</label>
        <input
          className="border-2 focus:outline-pink-900 rounded p-4"
          placeholder={errors.subject?.message || "Message subject"}
          {...register("subject")}
        />
        {<span className='text-sm italic text-red-700'>{errors.subject?.message}</span>}
      </div>
      <div className="flex flex-col mb-4">
        <label className="font-medium mb-2">Message</label>
        <textarea
          rows={5}
          className="border-2 rounded p-4 focus:outline-pink-900"
          placeholder={errors.message?.message || "Your message ...."}
          {...register("message")}
        />
        {<span className='text-sm italic text-red-700'>{errors.message?.message}</span>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className="bg-red-400 bg-gradient-to-r from-purple-700 hover:to-purple-700 to-pink-700 hover:from-pink-700 text-sm inline-flex items-center justify-between text-white rounded py-3 px-6 disabled:opacity-50"
      >
        Send message
        <IoArrowForward className="text-lg ml-4" />
      </button>
    </form>
  )
}

export default ContactForm