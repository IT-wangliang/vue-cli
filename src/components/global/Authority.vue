<script>
export default {
  name: "Authority",
  functional: true,
  props: {
    authority: {
      type: Boolean,
      default: false
    }
  },
  render: (h, context) => {
    const { props, scopedSlots } = context;
    return props.authority ? scopedSlots.default() : null;
  }
};
</script>
