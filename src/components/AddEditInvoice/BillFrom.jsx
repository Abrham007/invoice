import InputText from "../UI/Inputs/InputText";

export default function BillFrom({ register, errors }) {
  return (
    <fieldset className="flex flex-col gap-6">
      <h3 className="text-base text-1">Bill From</h3>
      <InputText
        name="senderAddress.street"
        register={register}
        errors={errors.senderAddress?.street}
        label="Street Address"
      ></InputText>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex gap-6 md:w-2/3">
          <InputText
            name="senderAddress.city"
            register={register}
            errors={errors.senderAddress?.city}
            label="City"
          ></InputText>
          <InputText
            name="senderAddress.postCode"
            register={register}
            errors={errors.senderAddress?.postCode}
            label="Post Code"
          ></InputText>
        </div>
        <div className="md:w-1/3">
          <InputText
            name="senderAddress.country"
            register={register}
            errors={errors.senderAddress?.country}
            label="Country"
          ></InputText>
        </div>
      </div>
    </fieldset>
  );
}
