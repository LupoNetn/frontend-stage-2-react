import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { toast } from "sonner";

const STATUS_OPTIONS = [
  { value: "open", label: "Open", color: "bg-emerald-400/20 text-emerald-300" },
  {
    value: "in_progress",
    label: "In Progress",
    color: "bg-amber-400/20 text-amber-300",
  },
  { value: "closed", label: "Closed", color: "bg-gray-700/20 text-gray-300" },
];

const PRIORITY_OPTIONS = ["low", "medium", "high"];

const TicketModal = ({ isOpen, onClose, onSave, onDelete, initialData }) => {
  const [toastMessage, setToastMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Reset form when initialData changes or modal opens/closes
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({
        title: "",
        description: "",
        status: "open",
        priority: "low",
      });
    }
  }, [initialData, isOpen, reset]);

  const onSubmit = async (data) => {
    try {
      toast.promise(
        async () => {
          if (initialData) {
            await onSave({ ...data, id: initialData.id });
          } else {
            await onSave(data);
          }
          reset({
            title: "",
            description: "",
            status: "open",
            priority: "low",
          });
          onClose();
        },
        {
          loading: initialData ? "Updating ticket..." : "Creating ticket...",
          success: initialData ? "Ticket updated!" : "Ticket created!",
          error: "Something went wrong",
        }
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async () => {
    if (!onDelete || !initialData) return;
    setSubmitting(true);
    try {
      await onDelete(initialData.id);
      setToastMessage({ type: "success", message: "Ticket deleted!" });
      onClose();
    } catch {
      setToastMessage({ type: "error", message: "Failed to delete ticket." });
    } finally {
      setSubmitting(false);
      setConfirmDelete(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-10 px-4">
      <div
        className="w-full max-w-2xl bg-linear-to-b from-gray-900/90 to-black/90 border border-gray-800 rounded-2xl p-6 shadow-[0_0_60px_-15px_rgba(6,182,212,0.18)] mt-8 mb-12"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header */}{" "}
        <div className="flex items-center justify-between gap-4">
          {" "}
          <div>
            {" "}
            <h3 className="text-xl font-semibold text-white">
              {initialData ? "Edit Ticket" : "Create Ticket"}{" "}
            </h3>{" "}
            <p className="text-sm text-gray-400 mt-1">
              {initialData
                ? "Update details below."
                : "Add details for a new ticket."}{" "}
            </p>{" "}
          </div>{" "}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        {/* Delete confirmation */}
        {confirmDelete && (
          <div className="mt-4 p-4 bg-rose-900/40 border border-rose-800 rounded-md">
            <p className="text-sm text-rose-200">
              Are you sure you want to delete this ticket? This cannot be
              undone.
            </p>
            <div className="mt-3 flex justify-end gap-2">
              <button
                onClick={() => setConfirmDelete(false)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={submitting}
                className="px-4 py-2 bg-rose-500 text-white rounded-md disabled:opacity-50"
              >
                {submitting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        )}
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Title <span className="text-rose-400">*</span>
            </label>
            <input
              {...register("title", {
                required: "Title is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
              className={`mt-2 w-full rounded-md px-4 py-3 bg-gray-800 border ${
                errors.title ? "border-rose-500" : "border-gray-700"
              } text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400`}
              placeholder="e.g. Fix login issue"
            />
            {errors.title && (
              <p className="text-rose-400 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Description
            </label>
            <textarea
              {...register("description", {
                maxLength: { value: 2000, message: "Max 2000 characters" },
              })}
              rows={3}
              className={`mt-2 w-full rounded-md px-4 py-3 bg-gray-800 border ${
                errors.description ? "border-rose-500" : "border-gray-700"
              } text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400`}
              placeholder="Add details..."
            />
            {errors.description && (
              <p className="text-rose-400 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Status <span className="text-rose-400">*</span>
              </label>
              <select
                {...register("status", { required: true })}
                className="mt-2 w-full rounded-md px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-400"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Priority
              </label>
              <select
                {...register("priority")}
                className="mt-2 w-full rounded-md px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-400"
              >
                {PRIORITY_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            {initialData && (
              <button
                type="button"
                onClick={() => setConfirmDelete((s) => !s)}
                className="px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
              >
                {confirmDelete ? "Cancel" : "Delete"}{" "}
              </button>
            )}{" "}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50"
            >
              {isSubmitting
                ? initialData
                  ? "Saving..."
                  : "Creating..."
                : initialData
                  ? "Save Changes"
                  : "Create Ticket"}
            </button>
          </div>
        </form>
      </div>

      {toastMessage && (
        <div
          className={`fixed right-6 bottom-6 z-60 rounded-md px-4 py-3 text-sm font-medium ${
            toastMessage.type === "success"
              ? "bg-emerald-600/90 text-white"
              : "bg-rose-600/90 text-white"
          }`}
        >
          {toastMessage.message}
        </div>
      )}
    </div>
  );
};

TicketModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  initialData: PropTypes.object,
};

export default TicketModal;
